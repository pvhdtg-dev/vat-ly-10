@echo off
chcp 65001 > nul
title Máy chủ Học Tập Vật Lí 10
echo Đang khởi động máy chủ cục bộ tự động tìm cổng trống (tránh cổng 8000)...
python server.py
pause
