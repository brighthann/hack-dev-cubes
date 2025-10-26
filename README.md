## ENGLISH ##

# Hack-Dev-Cubes: CI/CD Docker Cubes for SourceCraft.dev

A collection of reusable Docker-based CI/CD cubes for the SourceCraft.dev platform, enabling automated notifications and repository management.

# Project Overview

This project provides three specialized Docker cubes that extend SourceCraft.dev's CI/CD capabilities:

1. Telegram Notification Cube - Send build status updates to Telegram
2. Yandex Messenger Cube - Integrate with Yandex Messenger for notifications
3. Git Mirror Cube - Automatically mirror repositories between different Git providers

# Architecture

- Development: GitHub (collaboration, code review, version control)
- CI/CD: SourceCraft.dev (build, test, deploy)
- Container Registry: Yandex Cloud Container Registry
- Runtime: Docker containers with Node.js

# Cubes:

# Telegram Notification Cube
Sends customizable notifications to Telegram chats and channels about CI/CD pipeline status.

Environment Variables:
- TELEGRAM_BOT_TOKEN: Your Telegram bot token
- TELEGRAM_CHAT_ID: Target chat/channel ID
- MESSAGE: Custom notification message
- BUILD_STATUS: Current build status (success/failure)

Outputs:
- MESSAGE_ID: Telegram message ID
- STATUS: Delivery status
- TIMESTAMP: Send timestamp

# Yandex Messenger Cube
Integrates with Yandex Messenger for enterprise team notifications.

Environment Variables:
- YANDEX_TOKEN: Yandex Messenger API token
- CHAT_ID or YANDEX_CHAT_ID: Target chat ID
- MESSAGE: Notification content
- BUILD_STATUS: Build status indicator

Outputs:
- MESSAGE_ID: Yandex message ID
- STATUS: Delivery status
- CHAT_ID: Target chat
- TIMESTAMP: Send timestamp

# Git Mirror Cube
Automatically mirrors repositories between different Git hosting providers.

Environment Variables:
- SOURCE_REPO: Source repository URL
- TARGET_REPO: Target repository URL
- GIT_TOKEN: Authentication token for private repositories
- BRANCH: Branch to mirror (default: main)
- CLONE_DEPTH: Clone depth for optimization (default: 1)

Outputs:
- MIRROR_STATUS: Success/failure status
- SOURCE_COMMIT: Source commit hash
- DURATION_MS: Operation duration
- TIMESTAMP: Mirror timestamp

# Setup Instructions

# Prerequisites
- Yandex Cloud account with Container Registry access
- SourceCraft.dev account
- GitHub account
- Docker installed locally
- Node.js - local testing

# Team Collaboration - Workflow is divided between team members

- Clone the repository
- Implement cubes with proper SOURCECRAFT_OUTPUT handling
- Test locally with Docker
- Push to branch
- Test in SourceCraft CI/CD
- Test and push

# Integration
1. All progress pushed to GitHub branches
2. Create Pull Requests
3. Review team's code
4. Merge to main
5. Final push to SourceCraft
6. Run complete CI/CD pipeline

# Project Structure


hack-dev-cubes/
├── .sourcecraft/
│   ├── ci.yaml              # Main CI/CD configuration
│   └── example-pipeline.yaml # Usage examples
├── .github/
│   └── workflows/           
├── telegram-cube/          
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
├── yandex-messenger-cube/   
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
├── git-mirror-cube/       
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
├── docker-compose.yml     # Local testing
└── README.md              # This file

# Hackathon Notes

- Timeline: 48 hours
- Platform: SourceCraft.dev for CI/CD, GitHub for collaboration
- Goal: Functional, documented, demonstrable CI/CD extensions
- Focus: Working implementation over perfection

# Team

- Developer 1: Yandex Messenger & Git Mirror Cubes
- Developer 2: Telegram Notification Cube
- Platform: SourceCraft.dev + GitHub hybrid approach


*Built for SourceCraft.dev Hackathon - Extending CI/CD with Docker Cubes*


## RUSSIAN ##

# Hack-Dev-Cubes: CI/CD Docker-кубы для SourceCraft.dev

Коллекция многоразовых CI/CD-кубов на основе Docker для платформы SourceCraft.dev, позволяющих автоматизировать уведомления и управление репозиториями.

# Обзор проекта

Этот проект предоставляет три специализированных Docker-куба, которые расширяют возможности SourceCraft.dev в области CI/CD:

1. Telegram Notification Cube - Отправка обновлений статуса сборки в Telegram
2. Yandex Messenger Cube - Интеграция с Yandex Messenger для получения уведомлений
3. Git Mirror Cube - Автоматическое зеркалирование репозиториев между различными поставщиками Git

# Архитектура

- Разработка: GitHub (совместная работа, проверка кода, контроль версий)
- CI/CD: SourceCraft.dev (сборка, тестирование, развертывание)
- Реестр контейнеров: Yandex Cloud Container Registry
- Среда выполнения: контейнеры Docker с Node.js

# Cubes:

# Telegram Notification Cube
Отправляет настраиваемые уведомления в чаты и каналы Telegram о статусе конвейера CI/CD.

Переменные среды:
- TELEGRAM_BOT_TOKEN: токен вашего бота Telegram
- TELEGRAM_CHAT_ID: идентификатор целевого чата/канала
- MESSAGE: Настраиваемое уведомление
- BUILD_STATUS: текущий статус сборки (успех/неудача)

Выходы:
- MESSAGE_ID: Идентификатор сообщения в Telegram
- СТАТУС: Статус доставки
- ОТМЕТКА времени: Отметка времени отправки

# Yandex Messenger Cube
Интегрируется с Yandex Messenger для уведомлений корпоративной команды.

Переменные среды:
- YANDEX_TOKEN: токен API Yandex Messenger
- CHAT_ID или YANDEX_CHAT_ID: Идентификатор целевого чата
- СООБЩЕНИЕ: Содержимое уведомления
- BUILD_STATUS: индикатор состояния сборки

Выходы:
- MESSAGE_ID: Идентификатор сообщения в Яндексе
- СТАТУС: Статус доставки
- Идентификатор чата: Целевой чат
- ВРЕМЕННАЯ МЕТКА: Отправьте временную метку

# Git Mirror Cube
Автоматически отображает репозитории между разными хостинг-провайдерами Git.

Переменные среды:
- SOURCE_REPO: URL исходного репозитория
- TARGET_REPO: URL целевого репозитория
- GIT_TOKEN: Токен аутентификации для частных репозиториев
- ВЕТВЬ: Переход к зеркалу (по умолчанию: главная)
- CLONE_DEPTH: глубина клонирования для оптимизации (по умолчанию: 1)

Выходы:
- MIRROR_STATUS: Статус успешного выполнения/сбоя
- SOURCE_COMMIT: Хэш исходной фиксации
- DURATION_MS: Продолжительность операции
- ВРЕМЕННАЯ МЕТКА: Зеркальная временная метка

# Инструкции по установке

# Предварительные требования
- Облачная учетная запись Яндекса с доступом к реестру контейнеров
- Учетная запись SourceCraft.dev
- учетная запись на GitHub
- Локально установленный Docker
- Node.js - локальное тестирование

# Совместная работа команды - Рабочий процесс разделен между членами команды

- Клонирование репозитория
- Внедрение кубов с надлежащей обработкой SOURCECRAFT_OUTPUT
- Локальное тестирование с помощью Docker
- Переход к ветви
- Тестирование в SourceCraft CI/CD
- Тестирование и переход

# Интеграция
1. Весь прогресс перенесен в ветки GitHub
2. Создаем запросы на доработку
3. Проверяем код команды
4. Объединяем с основным
5. Завершаем загрузку в SourceCraft
6. Запускаем полный конвейер CI/CD

# Структура проекта


hack-dev-cubes/
├── .исходный код/
│ ├── ci.yaml # Основная конфигурация CI/CD
│ └── пример конвейера.yaml # Примеры использования
├── .github/
│ └── рабочие процессы/           
├── telegram-cube/          
│   ├── Dockerfile
│ ├── package.json
│ └── src/
│ └── index.js
├── яндекс-мессенджер-куб/   
│   ├── Dockerfile
│ ├── package.json
│ └── src/
│ └── index.js
├── git-зеркальный куб/       
│   ├── Файл Dockerfile
│ ├── package.json
│ └── src/
│ └── index.js
├── docker-compose.yml # Локальное тестирование
└── README.md # Этот файл

# Заметки о хакатоне

- Сроки: 48 часов
- Платформа: SourceCraft.dev для CI/CD, GitHub для совместной работы
- Цель: функциональные, документированные, демонстрируемые расширения CI/CD
- Фокус: Работа над совершенствованием реализации

# Команда

- Разработчик 1: Yandex Messenger и зеркальные кубы Git
- Разработчик 2: Telegram Notification Cube
- Платформа: гибридный подход SourceCraft.dev + GitHub


*Создан для хакатона SourceCraft.dev - расширение CI/CD с помощью Docker Cubes.*