// native.js: deteksi aplikasi Android (dibungkus Capacitor).
//
// Versi Android berjalan lokal saja: tanpa akun dan tanpa cloud, semua data di HP.
// Di browser biasa fungsi ini mengembalikan false, jadi versi web tidak berubah.

import { Capacitor } from "@capacitor/core";

export const diAplikasi = () => Capacitor.isNativePlatform();
