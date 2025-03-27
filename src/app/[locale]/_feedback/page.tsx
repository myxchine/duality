"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const AGENCY_NAME = "Michael Santos Web Solutions";
const AGENCY_WEBSITE = "michaelsantos.pt";
const AGENCY_EMAIL = "michael@michaelsantos.pt";

interface FormData {
  projectName: string;
  dateCompleted: string;
  clientName: string;
  contactPerson: string;
  overallSatisfaction: string | null;
  communicationSatisfaction: string | null;
  communicationComments: string;
  qualitySatisfaction: string | null;
  qualityComments: string;
  timelinessSatisfaction: string | null;
  timelinessComments: string;
  likedMost: string;
  canImprove: string;
  testimonialWilling: "yes" | "no" | null;
  testimonialContent: string;
  permissionToUse: boolean;
  wouldRecommend: "yes" | "maybe" | "no" | null;
  otherComments: string;
}

export default function ClientFeedbackForm() {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    dateCompleted: "",
    clientName: "",
    contactPerson: "",
    overallSatisfaction: null,
    communicationSatisfaction: null,
    communicationComments: "",
    qualitySatisfaction: null,
    qualityComments: "",
    timelinessSatisfaction: null,
    timelinessComments: "",
    likedMost: "",
    canImprove: "",
    testimonialWilling: null,
    testimonialContent: "",
    permissionToUse: false,
    wouldRecommend: null,
    otherComments: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRatingChange = (name: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // --- TODO: Add your form submission logic here ---
    // (e.g., send data to an API endpoint)
    alert("Thank you for your feedback!");
    // Optionally reset form: setFormData({initial state});
  };

  // Helper component for rating scales
  const RatingScale = ({
    name,
    value,
    onChange,
  }: {
    name: keyof FormData;
    label: string;
    value: string | null;
    onChange: (name: keyof FormData, value: string) => void;
  }) => (
    <div className="flex space-x-4 items-center mt-2">
      <span className="text-sm text-gray-500 mr-2">Very Dissatisfied</span>
      {[1, 2, 3, 4, 5].map((rating) => (
        <label
          key={rating}
          className="flex items-center space-x-1 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={String(rating)}
            checked={value === String(rating)}
            onChange={() => onChange(name, String(rating))}
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            required
          />
          <span className="text-sm">{rating}</span>
        </label>
      ))}
      <span className="text-sm text-gray-500 ml-2">Very Satisfied</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg my-10 border border-gray-200">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Client Feedback Form - {AGENCY_NAME}
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for choosing {AGENCY_NAME} for your web design and development
        needs! Your feedback is valuable and helps us improve our services.
        Please take a few moments to complete this form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Project Information Section */}
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="dateCompleted"
              className="block text-sm font-medium text-gray-700"
            >
              Date Completed
            </label>
            <input
              type="date"
              id="dateCompleted"
              name="dateCompleted"
              value={formData.dateCompleted}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="clientName"
              className="block text-sm font-medium text-gray-700"
            >
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contactPerson"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </fieldset>

        <hr className="border-gray-300" />

        {/* --- Satisfaction Questions --- */}

        {/* 1. Overall Satisfaction */}
        <div>
          <label className="block text-md font-semibold text-gray-800">
            1. Overall Satisfaction
          </label>
          <p className="text-sm text-gray-600 mb-2">
            How satisfied were you with the overall service provided by{" "}
            {AGENCY_NAME}?
          </p>
          <RatingScale
            name="overallSatisfaction"
            value={formData.overallSatisfaction}
            onChange={handleRatingChange}
            label="Very Dissatisfied"
          />
        </div>

        {/* 2. Communication */}
        <div>
          <label className="block text-md font-semibold text-gray-800">
            2. Communication
          </label>
          <p className="text-sm text-gray-600 mb-2">
            How satisfied were you with the communication throughout the
            project?
          </p>
          <RatingScale
            name="communicationSatisfaction"
            value={formData.communicationSatisfaction}
            onChange={handleRatingChange}
            label="Very Dissatisfied"
          />
          <div className="mt-4">
            <label
              htmlFor="communicationComments"
              className="block text-sm font-medium text-gray-700"
            >
              Comments on communication (optional):
            </label>
            <textarea
              id="communicationComments"
              name="communicationComments"
              rows={3}
              value={formData.communicationComments}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
        </div>

        {/* 3. Quality of Work */}
        <div>
          <label className="block text-md font-semibold text-gray-800">
            3. Quality of Work
          </label>
          <p className="text-sm text-gray-600 mb-2">
            How satisfied were you with the final quality of the website
            delivered?
          </p>
          <RatingScale
            name="qualitySatisfaction"
            value={formData.qualitySatisfaction}
            onChange={handleRatingChange}
            label="Very Dissatisfied"
          />
          <div className="mt-4">
            <label
              htmlFor="qualityComments"
              className="block text-sm font-medium text-gray-700"
            >
              Comments on quality (optional):
            </label>
            <textarea
              id="qualityComments"
              name="qualityComments"
              rows={3}
              value={formData.qualityComments}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
        </div>

        {/* 4. Timeliness */}
        <div>
          <label className="block text-md font-semibold text-gray-800">
            4. Timeliness
          </label>
          <p className="text-sm text-gray-600 mb-2">
            How satisfied were you with the project's adherence to the agreed
            timeline?
          </p>
          <RatingScale
            name="timelinessSatisfaction"
            value={formData.timelinessSatisfaction}
            onChange={handleRatingChange}
            label="Very Dissatisfied"
          />
          <div className="mt-4">
            <label
              htmlFor="timelinessComments"
              className="block text-sm font-medium text-gray-700"
            >
              Comments on timeliness (optional):
            </label>
            <textarea
              id="timelinessComments"
              name="timelinessComments"
              rows={3}
              value={formData.timelinessComments}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
        </div>

        {/* --- Open-Ended Questions --- */}

        {/* 5. Liked Most */}
        <div>
          <label
            htmlFor="likedMost"
            className="block text-md font-semibold text-gray-800 mb-2"
          >
            5. What did you like most about working with {AGENCY_NAME}?
          </label>
          <textarea
            id="likedMost"
            name="likedMost"
            rows={4}
            value={formData.likedMost}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* 6. Can Improve */}
        <div>
          <label
            htmlFor="canImprove"
            className="block text-md font-semibold text-gray-800 mb-2"
          >
            6. What could {AGENCY_NAME} improve upon?
          </label>
          <textarea
            id="canImprove"
            name="canImprove"
            rows={4}
            value={formData.canImprove}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        {/* --- Testimonial Section --- */}
        <div>
          <label className="block text-md font-semibold text-gray-800 mb-2">
            7. Testimonial
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Would you be willing to provide a testimonial that we could
            potentially use on our website or marketing materials?
          </p>
          <div className="flex space-x-6 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="testimonialWilling"
                value="yes"
                checked={formData.testimonialWilling === "yes"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                required
              />
              <span className="text-sm font-medium text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="testimonialWilling"
                value="no"
                checked={formData.testimonialWilling === "no"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                required
              />
              <span className="text-sm font-medium text-gray-700">No</span>
            </label>
          </div>

          {formData.testimonialWilling === "yes" && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="testimonialContent"
                  className="block text-sm font-medium text-gray-700"
                >
                  If yes, please provide your testimonial below (or let us know
                  if you'd prefer we draft something based on your feedback for
                  your approval):
                </label>
                <textarea
                  id="testimonialContent"
                  name="testimonialContent"
                  rows={5}
                  value={formData.testimonialContent}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required={formData.testimonialWilling === "yes"} // Make required only if 'yes' is selected
                ></textarea>
              </div>
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="permissionToUse"
                    name="permissionToUse"
                    type="checkbox"
                    checked={formData.permissionToUse}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    required={formData.testimonialWilling === "yes"} // Make required only if 'yes' is selected
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="permissionToUse"
                    className="font-medium text-gray-700"
                  >
                    I grant {AGENCY_NAME} permission to use my testimonial (and
                    optionally, my name and company name) in their marketing
                    materials.
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- Recommendation --- */}
        <div>
          <label className="block text-md font-semibold text-gray-800 mb-2">
            8. Would you recommend {AGENCY_NAME} to others?
          </label>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="wouldRecommend"
                value="yes"
                checked={formData.wouldRecommend === "yes"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                required
              />
              <span className="text-sm font-medium text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="wouldRecommend"
                value="maybe"
                checked={formData.wouldRecommend === "maybe"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                required
              />
              <span className="text-sm font-medium text-gray-700">Maybe</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="wouldRecommend"
                value="no"
                checked={formData.wouldRecommend === "no"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                required
              />
              <span className="text-sm font-medium text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* --- Other Comments --- */}
        <div>
          <label
            htmlFor="otherComments"
            className="block text-md font-semibold text-gray-800 mb-2"
          >
            9. Any other comments or suggestions?
          </label>
          <textarea
            id="otherComments"
            name="otherComments"
            rows={4}
            value={formData.otherComments}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <hr className="border-gray-300" />

        {/* --- Submission --- */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Submit Feedback
          </button>
        </div>
      </form>

      {/* --- Footer --- */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-center text-gray-500 text-sm">
        <p className="font-semibold mb-1">
          Thank you for your valuable feedback!
        </p>
        <p>{AGENCY_NAME}</p>
        {AGENCY_WEBSITE && (
          <p>
            <a
              href={AGENCY_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {AGENCY_WEBSITE}
            </a>
          </p>
        )}
        {AGENCY_EMAIL && (
          <p>
            <a
              href={`mailto:${AGENCY_EMAIL}`}
              className="text-indigo-600 hover:underline"
            >
              {AGENCY_EMAIL}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
