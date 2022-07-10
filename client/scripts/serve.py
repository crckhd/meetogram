#!/usr/bin/env python3

# Импортируем модуль для работы с ОСью
import os, sys

from glob import glob

# Функция для выполнения команды
def serve(entry_points):
    print(entry_points)
    os.system('yarn parcel serve ' + ' '.join(entry_points))

# Метод, который ищет входну точку в public/
def searchForEntryPoint(argument_list):

    # Список с аргументами для компиляции
    result = [];

    # Путь к директории public (для listdir)
    DEFAULT_PATH = '/public/'

    # Используем текущий путь
    cwd = os.getcwd()

    # Перечисляем все файлы в директории public
    public_files = glob(cwd + DEFAULT_PATH + '*.html')

    # Если мы не передали аргументы - возвращаем все файлы html для компиляции
    if len(argument_list) == 0:
        return public_files

    # Проходимся по всем файлам, которые мы нашли
    for file_name in public_files:
        for argument in argument_list:
            if argument in file_name:
                result.append('.' + DEFAULT_PATH + argument + '.html')

    # Если поиск файлов не дал никаких результатов
    if len(result) == 0:
        print('Files ' + ' '.join(argument_list) + ' doesn\'t exist in ./public!')
        exit(1)

    return result

# ======================================== #

# Если мы используем файл как бинарник (через python3 ./serve.py)
if __name__ == '__main__':

    # Базовая команда, которую мы выполним
    default_command = 'yarn parcel serve '

    # Аргументы, которые мы передали в командной строке
    argument_list = sys.argv[1:]

    # Входные точки для компиляции
    entry_points = [];

    # Если длина списка аргументов равна 0 (аргументы не переданы)
    if len(argument_list) == 0:
        print('Compiling all files!');
    else:
        print('Searching for: ' + ' '.join(argument_list))

    # Собираем файлы для компиляции
    entry_points = searchForEntryPoint(argument_list)

    # Запускаем serve
    serve(entry_points)
