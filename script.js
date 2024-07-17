document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form agar tidak di-submit secara default

    // Mengambil nilai dari form
    const gender = document.querySelector('input[name="gender"]:checked').value;  // Mengambil jenis kelamin yang dipilih
    const weight = parseFloat(document.getElementById('weight').value);  // Mengambil dan mengubah berat badan menjadi angka
    const height = parseFloat(document.getElementById('height').value);  // Mengambil dan mengubah tinggi badan menjadi angka

    // Menghitung BMI
    const bmi = calculateBMI(weight, height);

    // Menampilkan hasil
    const bmiStatus = getBMIStatus(bmi, gender);  // Mendapatkan status BMI berdasarkan nilai BMI dan jenis kelamin
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);  // Menampilkan nilai BMI dengan satu angka desimal
    document.getElementById('bmi-status').textContent = bmiStatus;  // Menampilkan status BMI
    document.getElementById('result-container').classList.remove('hidden');  // Menampilkan elemen hasil yang sebelumnya tersembunyi
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;  // Mengubah tinggi badan dari sentimeter ke meter
    return weight / (heightInMeters * heightInMeters);  // Menghitung BMI dengan rumus BMI = berat / (tinggi * tinggi)
}


function getBMIStatus(bmi, gender) {
    if (bmi < 18.5) {
        return 'kekurangan berat badan';  // BMI kurang dari 18.5 dianggap kekurangan berat badan
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'normal (ideal)';  // BMI antara 18.5 dan 24.9 dianggap normal atau ideal
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return 'kelebihan berat badan';  // BMI antara 25.0 dan 29.9 dianggap kelebihan berat badan
    } else {
        return 'kegemukan (obesitas)';  // BMI 30 atau lebih dianggap obesitas
    }
}
