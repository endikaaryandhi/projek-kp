import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SurveyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const responseScript = await fetch("https://script.google.com/macros/s/AKfycbxHH5CJayPUdyvNGTi5G716BkztpTvLR7vsUCrmHE9i4HKjBb3uRCF0MYcJOCpwHlg9/exec", {
        method: "POST",
        body: formData,
      });

      const responseEmail = await fetch("https://formsubmit.co/ajax/drivezthru@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (responseScript.ok && responseEmail.ok) {
        form.reset();
        toast.success("🎉 Terima kasih! Survei berhasil dikirim.");
      } else {
        toast.error("Gagal mengirim survei ke salah satu layanan.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengirim formulir.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-100  py-6">
      <div className="w-full max-w-5xl bg-white shadow-xl p-6 sm:p-10 font-sans text-gray-800 relative mx-auto">
        <Toaster position="top-center" />
        <h1 className="text-2xl font-bold mb-1 text-justify">Survei Kepuasan Masyarakat BBPJN Jawa Tengah – DIY</h1>
        <p className="text-sm text-gray-600 mb-4 text-justify">Kami sangat menghargai kepercayaan dan dukungan Anda terhadap layanan kami. Untuk meningkatkan kualitas pelayanan publik, kami mengundang Anda untuk meluangkan sedikit waktu dalam mengisi survei kepuasan pengguna berikut ini. Masukan Anda sangat berarti bagi perbaikan dan pengembangan layanan ke depannya.</p>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Survei Pelayanan Publik BBPJN" />

          <div>
            <label className="font-semibold">Tanggal Survey <span className="text-red-500">*</span></label>
            <input type="date" name="Tanggal Survey" required className="w-full border p-2 rounded-md mt-1 " />
          </div>

          <div>
            <label className="font-semibold">Spesifikasi Jenis Layanan <span className="text-red-500">*</span></label>
            <select name="Spesifikasi Jenis Layanan" required className="w-full border p-2 rounded-md mt-1">
              <option value="">-- Pilih Layanan --</option>
              <option>Permohonan Informasi Publik</option>
              <option>Perizinan Pemanfaatan Bagian-Bagian Jalan</option>
              <option>Laboratorium Pengujian Material</option>
              <option>Sertifikasi AMP</option>
              <option>Sewa Peralatan</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Nama Lengkap <span className="text-red-500">*</span></label>
            <input name="Nama Lengkap" required className="w-full border p-2 rounded-md mt-1" />
          </div>

          <div>
            <label className="font-semibold">Perusahaan / Instansi <span className="text-red-500">*</span></label>
            <input name="Perusahaan / Instansi" required className="w-full border p-2 rounded-md mt-1" />
          </div>

          <div>
            <label className="font-semibold">Umur <span className="text-red-500">*</span></label>
            <input name="Umur" required className="w-full border p-2 rounded-md mt-1" />
          </div>

          <div>
            <label className="font-semibold">Jenis Kelamin <span className="text-red-500 ">*</span></label>
            <div className="flex flex-col mt-1 space-y-2">
              {["Laki - laki", "Perempuan"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="Jenis Kelamin" value={item} required />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-semibold">Pendidikan Terakhir <span className="text-red-500">*</span></label>
            <input name="Pendidikan Terakhir" required className="w-full border p-2 rounded-md mt-1 font-semibold" />
          </div>

          {/* Pertanyaan 1–9 */}
          {[
            "1. Bagaimana pendapat Saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",
            "2. Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan di unit ini?",
            "3. Bagaimana pendapat Saudara tentang ketepatan waktu dalam memberikan pelayanan?",
            "4. Bagaimana pendapat Saudara tentang kewajaran biaya/tarif dalam pelayanan?",
            "5. Bagaimana pendapat Saudara tentang kesesuaian produk pelayanan antara yang tercantum dalam standar pelayanan dengan hasil yang diberikan?",
            "6. Bagaimana pendapat Saudara tentang kompetensi/kemampuan petugas dalam pelayanan?",
            "7. Bagamana pendapat Saudara perilaku petugas dalam pelayanan terkait kesopanan dan keramahan?",
            "8. Bagaimana pendapat Saudara tentang kualitas sarana dan prasarana pelayanan?",
            "9. Bagaimana pendapat Saudara tentang penanganan pengaduan pengguna layanan?",
          ].map((question, index) => {
            const optionsList = [
              [
                "Tidak Sesuai",
                "Kurang Sesuai",
                "Sesuai",
                "Sangat Sesuai"
              ],
              [
                "Tidak mudah",
                "Kurang Mudah",
                "Mudah",
                "Sangat Mudah"
              ],
              [
                "Tidak Tepat",
                "Kurang Tepat",
                "Tepat",
                "Sangat Tepat"
              ],
              [
                "Tidak Wajar",
                "Kurang Wajar",
                "Wajar",
                "Sangat Wajar"
              ],
              [
                "Tidak Sesuai",
                "Kurang Sesuai",
                "Sesuai",
                "Sangat Sesuai"
              ],
              [
                "Tidak Kompeten",
                "Kurang Kompeten",
                "Kompeten",
                "Sangat Kompeten"
              ],
              [
                "Tidak sopan dan tidak ramah",
                "Kurang sopan dan kurang ramah",
                "Sopan dan ramah",
                "Sangat sopan dan sangat ramah"
              ],
              [
                "Buruk",
                "Cukup",
                "Baik",
                "Sangat Baik"
              ],
              [
                "Tidak ada",
                "Ada tetapi tidak berfungsi",
                "Berfungsi kurang maksimal",
                "Dikelola dengan baik"
              ]
            ];

            return (
              <div key={index}>
                <label className="font-semibold block mb-1">{question} <span className="text-red-500">*</span></label>
                <div className="space-y-2 mt-1">
                  {optionsList[index].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={question}
                        value={option}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          <div>
            <label className="font-semibold">Kritik dan Saran (opsional)</label>
            <textarea name="Kritik dan Saran" rows="3" className="w-full border p-2 rounded-md mt-1" />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Mengirim..." : "Submit"}
            </button>
          </div>

          <p className="text-xs text-orange-500 mt-4">*) Wajib diisi</p>
        </form>
      </div>
    </div>
  );
};

export default SurveyPage;
