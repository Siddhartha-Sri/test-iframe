'use client'
import React, { useState, useEffect } from "react";
const StorageAccessPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  useEffect(() => {
    // Check if Storage Access API is available in Safari
    if (document.hasStorageAccess) {
      setShowPopup(true);
      document.hasStorageAccess().then((hasAccess) => {

        if (!hasAccess) {
          
          console.log("ougu") // Show popup if access is not granted
        } else {
          setAccessGranted(true);
        }
      });
    }
  }, []);
  const requestStorageAccess = async () => {
    try {
      if (!document.requestStorageAccess) {
        console.warn("Storage Access API not available in this browser.");
        return;
      }
      await document.requestStorageAccess(); // This must be triggered by user interaction
      setAccessGranted(true);
      setShowPopup(false);
      console.log(":white_check_mark: Storage access granted!");
    } catch (error) {
      console.error(":x: Storage access denied!", error);
    }
  };
  if (accessGranted) console.log("hi"); // Hide popup if access is already granted

  console.log("augdfauwfgp8ywd")
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-2">Enable Storage Access</h2>
            <p className="text-gray-600 mb-4">
              Safari blocks third-party cookies by default. Click the button below to allow access.
            </p>
            <button
              onClick={requestStorageAccess} // Now correctly triggered on click
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Allow Storage Access
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default StorageAccessPopup;