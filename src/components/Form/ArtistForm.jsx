"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "./ArtistForm.module.css";

const setupOptions = [
  "Solo; Singer also playing Guitar",
  "Duo Band; Singer and Guitarist",
  "Duo Band; Singer also playing Guitar and Percussionist",
  "Trio Band; Singer, Guitarist & Percussionist",
  "Full Piece Band",
];

const genreOptions = [
  "Bollywood Contemporary",
  "Bollywood Retro",
  "Sufi",
  "Punjabi",
  "Western",
  "Indian Classical",
];

const schema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  age: Yup.number().required("Age is required").min(10).max(100),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  statement: Yup.string().required("Artist's Statement is required"),
  setups: Yup.array().min(1, "Select at least one setup"),
  bandName: Yup.string(),
  professionType: Yup.string().required("Type of Profession is required"),
  experience: Yup.string().required("Experience is required"),
  education: Yup.string(),
  genres: Yup.array().min(1, "Select at least one genre"),
  socialLinks: Yup.string().required("Social Links are required"),
  hasContract: Yup.string().required("This field is required"),
});

export default function ExtendedArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const existing = JSON.parse(localStorage.getItem("onboardings")) || [];
    const updated = [...existing, data];
    localStorage.setItem("onboardings", JSON.stringify(updated));

    alert("Artist data submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
      <h1>Artist Onboarding Form</h1>

      <div className={styles.FormGroup}>
        <label>Full Name*</label>
        <input {...register("fullName")} />
        <p className={styles.ErrorText}>{errors.fullName?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Age*</label>
        <input type="number" {...register("age")} />
        <p className={styles.ErrorText}>{errors.age?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Email*</label>
        <input type="email" {...register("email")} />
        <p className={styles.ErrorText}>{errors.email?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Phone*</label>
        <input type="text" {...register("phone")} />
        <p className={styles.ErrorText}>{errors.phone?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>City*</label>
        <input type="text" {...register("city")} />
        <p className={styles.ErrorText}>{errors.city?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Artist's Statement*</label>
        <textarea {...register("statement")} />
        <p className={styles.ErrorText}>{errors.statement?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Performance Setups*</label>
        {setupOptions.map((opt) => (
          <label key={opt} className={styles.CheckboxLabel}>
            <input type="checkbox" value={opt} {...register("setups")} /> {opt}
          </label>
        ))}
        <p className={styles.ErrorText}>{errors.setups?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>If in a Band, Name</label>
        <input {...register("bandName")} />
      </div>

      <div className={styles.FormGroup}>
        <label>Type of Profession*</label>
        <input {...register("professionType")} />
        <p className={styles.ErrorText}>{errors.professionType?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Years of Experience*</label>
        <input {...register("experience")} />
        <p className={styles.ErrorText}>{errors.experience?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Educational Qualification in Music</label>
        <input {...register("education")} />
      </div>

      <div className={styles.FormGroup}>
        <label>Genres*</label>
        {genreOptions.map((genre) => (
          <label key={genre} className={styles.CheckboxLabel}>
            <input type="checkbox" value={genre} {...register("genres")} />{" "}
            {genre}
          </label>
        ))}
        <p className={styles.ErrorText}>{errors.genres?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>Social Links (Facebook, Instagram, YouTube)*</label>
        <input {...register("socialLinks")} />
        <p className={styles.ErrorText}>{errors.socialLinks?.message}</p>
      </div>

      <div className={styles.FormGroup}>
        <label>
          Have you already signed an exclusive contract with an artist manager?*
        </label>
        <select {...register("hasContract")}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <p className={styles.ErrorText}>{errors.hasContract?.message}</p>
      </div>

      <button type="submit" className={styles.SubmitButton}>
        Submit
      </button>
    </form>
  );
}
