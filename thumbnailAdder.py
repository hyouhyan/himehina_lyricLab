import os
import re
import yaml

# YouTubeショートコードの正規表現
youtube_pattern = re.compile(r'\{\{<\s*youtube\s+(\S+)\s*>\}\}')

# Front Matterの境界線
front_matter_delim = '---'


def process_md_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Front Matterの抽出
    if content.startswith(front_matter_delim):
        parts = content.split(front_matter_delim)
        if len(parts) >= 3:
            front_matter_raw = parts[1]
            body = front_matter_delim.join(parts[2:])

            front_matter = yaml.safe_load(front_matter_raw)
            if 'image' not in front_matter:
                # YouTube IDを検索
                match = youtube_pattern.search(body)
                if match:
                    youtube_id = match.group(1)
                    front_matter['image'] = "https://img.youtube.com/vi/" + youtube_id + "/maxresdefault.jpg"

                    # 更新されたFront Matterで書き戻し
                    new_front_matter = yaml.dump(front_matter, allow_unicode=True)
                    new_content = f'{front_matter_delim}\n{new_front_matter}{front_matter_delim}\n{body}'

                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated image in: {file_path}')


def process_directory(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename == 'index.md':
                file_path = os.path.join(dirpath, filename)
                process_md_file(file_path)


if __name__ == '__main__':
    target_directory = './content/post/'  # 対象のルートディレクトリを指定
    process_directory(target_directory)
    print('Processing complete.')
