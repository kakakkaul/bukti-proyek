import KartuProfil from './components/kartuprofil.jsx';
export default function App() {
  return (
    <main>
      <h1>Daftar Anggota</h1>
      <KartuProfil nama="Budi" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Buda" peran="Mahasiswa" tahun={2026} aktif={true} />
      <KartuProfil nama="Budu" peran="Mahasiswa" tahun={2025} aktif={true} />
    </main>
    
  );
}
