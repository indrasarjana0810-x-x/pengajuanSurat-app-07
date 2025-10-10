const About = () => (
    <Header title="Tentang Aplikasi">
        <p className="text-gray-700 mb-4">
            Aplikasi ini dirancang sebagai studi kasus untuk tugas mata kuliah pengembangan web menggunakan React. Kami menerapkan prinsip modularitas dengan memecah antarmuka menjadi komponen-komponen yang dapat digunakan kembali.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Menggunakan fungsionalitas **Component, State, dan Props** untuk manajemen data.</li>
            <li>**Simulasi Routing** dilakukan menggunakan State untuk perpindahan antar 5 halaman.</li>
            <li>**Validasi Form** memastikan data yang diajukan lengkap dan valid.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-500">
            Dibuat oleh Tim [Nama Kelompok Anda] untuk Proyek React.
        </p>
    </Header>
);