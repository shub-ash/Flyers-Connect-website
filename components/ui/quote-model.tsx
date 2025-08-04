"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  selectedDevice?: string;
}

const DEVICE_OPTIONS = ["MacBook Pro", "MacBook Air", "iMac", "Mac Mini"];

const INITIAL_FORM_STATE = {
  firstName: "",
  organization: "",
  phone: "",
  device: "",
  area: "",
};

const FORM_FIELDS = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Organization",
    name: "organization",
    type: "text",
    placeholder: "Company, College, etc.",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    label: "Area",
    name: "area",
    type: "text",
    placeholder: "City, region, etc.",
  },
];

export default function QuoteModal({
  open,
  onClose,
  selectedDevice,
}: QuoteModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const resetForm = () => setFormData(INITIAL_FORM_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((val) => val.trim() !== "");
    if (!isValid) return;

    console.log("Submitted:", formData);
    resetForm();
    onClose();
  };

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
        resetForm();
      }
    };
    if (open) window.addEventListener("mousedown", handleOutsideClick);
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [open, onClose]);

  // Prefill selected device and reset others
  useEffect(() => {
    if (open) {
      setFormData((prev) => ({
        ...INITIAL_FORM_STATE,
        device: selectedDevice ?? "",
      }));
    } else {
      resetForm();
    }
  }, [open, selectedDevice]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -30 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-white rounded-2xl p-6 w-[90vw] max-w-md shadow-2xl relative"
          >
            <button
              onClick={() => {
                onClose();
                resetForm();
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.h2
              className="text-2xl font-bold mb-6 text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Request a Quote
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {FORM_FIELDS.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <label className="text-sm block mb-1">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="text-sm block mb-1">Device Needed</label>
                <select
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select a device
                  </option>
                  {DEVICE_OPTIONS.map((device) => (
                    <option key={device} value={device}>
                      {device}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 mt-2 bg-[#006FE6] text-white rounded-md font-semibold hover:bg-[#0056ba] transition"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
