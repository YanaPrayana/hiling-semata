import React from 'react';
import { dataOpenTrip } from '../../services/data/OpenTrip';
import '../../style/OpenTrip/LandingTrip.css';

const LandingTrip = () => {
  // Ambil trip termahal/terbaik untuk "Exclusive Signature"
  const signatureTrip = dataOpenTrip[0];
  const otherTrips = dataOpenTrip.slice(1, 4);

  return (
    <div className="exclusive-landing">
      {/* SECTION 1: LUXURY HERO */}
      <section className="luxury-hero">
        <div className="hero-visual-split">
          <div className="hero-text-side">
            <div className="reveal-text">
              <span className="gold-label">Premium Experience</span>
              <h1>Beyond <br />Ordinary <br /><span className="serif-italic">Travel.</span></h1>
              <p>Hanya untuk Anda yang menginginkan lebih dari sekadar perjalanan biasa. Rasakan eksklusivitas di setiap langkah.</p>
              <button className="cta-luxury">Explore Signature Trips</button>
            </div>
          </div>
          <div className="hero-image-side">
            <img src={signatureTrip.gambar} alt="Luxury Destination" />
            <div className="floating-info-card">
              <span>Next Departure</span>
              <strong>{signatureTrip.tanggalKeberangkatan}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE SHOWCASE (Asymmetric) */}
      <section className="signature-showcase">
        <div className="vertical-title">SIGNATURE</div>
        <div className="showcase-content">
          <div className="featured-big-card">
            <div className="img-container">
              <img src={signatureTrip.gambar} alt={signatureTrip.nama} />
              <div className="luxury-badge">Signature Trip</div>
            </div>
            <div className="details-overlay">
              <h2>{signatureTrip.nama}</h2>
              <p>{signatureTrip.deskripsiLengkap}</p>
              <div className="stats-row">
                <span>{signatureTrip.durasi}</span>
                <span className="divider">|</span>
                <span>Limited to {signatureTrip.kuota} Guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURATED LIST (Minimalist Grid) */}
      <section className="curated-list">
        <div className="curated-header">
          <h2>Curated Experiences</h2>
          <div className="gold-line"></div>
        </div>
        <div className="luxury-grid">
          {otherTrips.map((trip) => (
            <div key={trip.id} className="luxury-item">
              <div className="item-img">
                <img src={trip.gambar} alt={trip.nama} />
                <div className="item-price">IDR {trip.harga.toLocaleString()}</div>
              </div>
              <div className="item-desc">
                <span className="cat-text">{trip.kategori}</span>
                <h3>{trip.nama}</h3>
                <a href="#" className="discover-link">Discover More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingTrip;