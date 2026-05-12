import { bookingTripPage } from "../../data/opentrip/bookingTripData";

// ============================================================
// TEMPLATE HALAMAN - Ganti isi sesuai halaman masing-masing
// ============================================================

function BookingTrip() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-800 text-white py-14 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">{bookingTripPage.title}</h1>
        <p className="text-emerald-200 text-lg">{bookingTripPage.subtitle}</p>
      </div>

      {/* Konten */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-600">{bookingTripPage.bodyText}</p>
      </div>
    </div>
  );
}

export default BookingTrip;