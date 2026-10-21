@echo off
chcp 65001 > nul
title Đẩy ứng dụng lên GitHub (vat-ly-10)
echo ========================================================
echo    ĐANG ĐẨY ỨNG DỤNG LÊN GITHUB: pvhdtg-dev/vat-ly-10
echo ========================================================
echo.
echo Đang thực hiện: git push -u origin main...
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!
    echo ========================================================
    echo.
    echo Bước tiếp theo để web chạy online:
    echo 1. Vào https://github.com/pvhdtg-dev/vat-ly-10/settings/pages
    echo 2. Chọn Branch: main, Folder: /(root) -> Bấm Save.
    echo 3. Trang web sẽ chạy tại: https://pvhdtg-dev.github.io/vat-ly-10/
) else (
    echo.
    echo [LƯU Ý]: Nếu báo lỗi 'Repository not found', bạn hãy vào:
    echo https://github.com/new và tạo repo tên 'vat-ly-10' (chọn Public).
    echo Sau đó chạy lại file này!
)
echo.
pause
