import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config/config';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/config/constants';
import { fadeAnimation, slideAnimation } from '../config/config/motion';
import { ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  const [showDecalSelector, setShowDecalSelector] = useState(false);

  // Generate tab content based on the active editor tab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return (
          <FilePicker
            file={file}
            setFile={setFile}
            readFile={readFile}
          />
        );
      default:
        return null;
    }
  };

  // Read file for FilePicker
  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab(''); // Close the FilePicker tab
    });
  };

  // Handle applying decals
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  // Handle toggling filter tabs
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // Update active filter tab state
    setActiveFilterTab((prevState) => ({
      ...prevState,
      [tabName]: !prevState[tabName],
    }));
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Main Container */}
          <motion.div
            key="custom"
            className="absolute inset-0 z-10 flex items-center justify-center"
            {...slideAnimation('left')}
          >
            {/* Editor Tabs Sidebar */}
            <div className="absolute left-5 top-1/4 flex flex-col gap-4 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => setActiveEditorTab(tab.name)}
                />
              ))}
              {generateTabContent()}

              {/* Toggle Decal Selector Button */}
              <button
                className="bg-white/20 text-gray-800 text-4xl px-4 py-2 rounded-lg shadow-md hover:bg-white/30 transition"
                onClick={() => setShowDecalSelector(!showDecalSelector)}
              >
                🖼️
              </button>
            </div>

            {/* Decal Selector */}
            {showDecalSelector && (
              <div className="absolute bottom-5 left-5 w-72 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 w-6 h-6 text-gray-600 bg-gray-100 rounded-full shadow hover:bg-gray-200 hover:text-gray-900 transition"
                  onClick={() => setShowDecalSelector(false)}
                  aria-label="Close Decal Selector"
                >
                  &times;
                </button>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Choose a Decal
                </h2>
                {/* Make the decals container scrollable */}
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                  {snap.decals.map(([decal, color]) => (
                    <div
                      key={decal}
                      className="flex flex-col items-center justify-center p-2 bg-gray-100 border border-gray-200 rounded-lg hover:shadow-md cursor-pointer transition-transform transform hover:scale-105"
                      onClick={() => {
                        state.logoDecal = decal; // Set the logo decal
                        state.color = color; // Update the shirt color
                      }}
                    >
                      <img
                        src={decal}
                        alt="brand"
                        className="w-12 h-12 object-contain"
                      />
                      <span
                        className="mt-1 text-xs font-medium"
                        style={{ color }}
                      >
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Go Back Button */}
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
