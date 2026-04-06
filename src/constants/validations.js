import * as Yup from "yup";

// Base string with trimming and XSS prevention (no HTML tags)
const safeString = Yup.string()
  .trim()
  .test("no-html", "HTML characters are not allowed", (value) => {
    if (!value) return true; // allow empty strings if not required yet
    return !/<[^>]*>?/gm.test(value);
  });

export const contactSchema = Yup.object().shape({
  name: safeString
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: Yup.string()
    .trim()
    .email("Please provide a valid email address")
    .required("Email is required"),
  phone: safeString
    .required("Phone number is required")
    .matches(/^[+0-9\s\-()]+$/, "Please enter a valid phone number format"),
  interest: safeString
    .required("Please select your area of interest"),
  message: safeString
    .required("Message is required")
    .max(1000, "Message must not exceed 1000 characters"),
});

export const newsletterSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
});

export const searchSchema = Yup.object().shape({
  searchQuery: safeString
    .max(100, "Search query is too long"),
});
