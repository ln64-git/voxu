// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command; // Import the Command module to run external programs

fn main() {
    let result = Command::new("./bin/voxctl").spawn();
    if result.is_err() {
        eprintln!("Failed to start ./bin/voxctl: {}", result.unwrap_err());
    }

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
