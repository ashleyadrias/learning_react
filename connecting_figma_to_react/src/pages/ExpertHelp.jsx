import React, { useState } from 'react';
import ProjectList from '../components/ProjectList';
import ChatBox from '../components/ChatBox';
import '../styles/ExpertHelp.css';

const ChatPage = () => {
  const [selectedSubProject, setSelectedSubProject] = useState(null);

  const handleSelectSubProject = (subProject) => {
    setSelectedSubProject(subProject); // Update the selected sub-project
  };

  return (
    <div className="chat-page">
      {/* Left sidebar for projects and sub-projects */}
      <ProjectList onSelectSubProject={handleSelectSubProject} />

      {/* Chat box for the selected sub-project */}
      <div className="chat-area">
        {selectedSubProject ? (
          <ChatBox subProject={selectedSubProject} />
        ) : (
          <div className="placeholder">Select a sub-project to chat</div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;