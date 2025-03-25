#!/bin/bash

# 创建索引文件
echo "---" >index.md
echo "hidden: true" >>index.md
echo "readingTime: false" >>index.md
echo "date: false" >>index.md
echo "author: false" >>index.md
echo "recommend: false" >>index.md
echo "---" >>index.md
echo "" >>index.md
echo "# 小白量化交易日志" >>index.md

# 初始化列表
entries=()

for month in *; do
    echo "年: $month"
    if [ ! -d "$month" ]; then
        echo "不是文件夹: $month"
        continue
    fi
    for file in ${month}/*.md; do
        echo "file: $file"
        # 跳过索引文件本身
        if [[ "$file" == "index.md" ]]; then
            continue
        fi

        # 从文件中提取 title 和 date 字段，并去除可能的新行符和额外的空格
        title=$(grep '^title: ' "$file" | awk -F': ' '{gsub(/\r|\n/, "", $2); print $2}')
        date=$(grep '^date: ' "$file" | awk -F': ' '{gsub(/\r|\n/, "", $2); print $2}')
        # 构建条目字符串
        entry="$date $title ./$month/$(basename "$file")"
        entries+=("$entry")
    done
done

# 按照日期降序排序条目
IFS=$'\n' sorted_entries=($(sort -r <<<"${entries[*]}"))

# 当前年份变量
current_year=""

# 将排序后的内容写入索引文件，按年份分组
for entry in "${sorted_entries[@]}"; do
    echo "entry: $entry"
    # 获取年份
    year=$(echo "$entry" | cut -d '-' -f 1)
    # 获取月日和标题
    month_day_title=$(echo "$entry" | cut -d ' ' -f 2 )
    # 获取文件路径
    path=$(echo "$entry" | cut -d ' ' -f 3-)

    # 检查是否更换年份
    if [[ "$year" != "$current_year" ]]; then
        echo "" >>index.md
        echo "## $year"$'\n' >>index.md
        current_year="$year"
    fi

    # 输出条目
    echo "- [$month_day_title]($path)" >>index.md
done
