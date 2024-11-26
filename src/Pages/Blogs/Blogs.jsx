import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // Ensure the Card component is correctly set up
import blogData from '../../../public/blogData'; // Correct path to your blogData file


const Blogs = () => {
  useEffect(() => {
    // Scroll to the top first
    window.scrollTo(0, 0);

    // Scroll to the video section after a brief delay
    const videoSection = document.getElementById("video");
    if (videoSection) {
      setTimeout(() => {
        videoSection.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay ensures content is fully rendered before scrolling
    }
  }, []);


  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const blogContainerRef = useRef(null);

  // Filter blogs based on search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.trim().length > 0);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setShowSuggestions(false);
      setShouldScroll(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    setShouldScroll(true);
  };

  useEffect(() => {
    if (shouldScroll && filteredBlogs.length > 0 && blogContainerRef.current) {
      blogContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false);
    }
  }, [filteredBlogs, shouldScroll]);

  // Suggestions for search terms
  const suggestions = blogData
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        searchTerm.trim() !== ''
    )
    .map((blog) => blog.title);

  const handleExploreBlogs = () => {
    const blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
      blogContainer.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="  bg-gray-50 min-h-screen" >
      <div className="relative w-full min-h-screen overflow-hidden" id='video'>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/70 via-black/50 to-black/70 text-white p-6 space-y-8">
          {/* Header Text */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-center leading-tight animate-fade-in">
            Discover the Latest UTS Blogs
          </h1>
          <p className="text-xl lg:text-2xl text-center max-w-3xl text-gray-200 animate-fade-in-delay">
            Stay informed with insights, updates, and stories from the world of UTS. Dive into topics that spark your curiosity.
          </p>

          {/* Search Bar */}
          <div className="relative w-4/5 md:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Search blogs, topics, or authors..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              className="w-full p-4 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            {showSuggestions && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
                {suggestions.length > 0 ? (
                  suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="p-3 text-gray-800 cursor-pointer hover:bg-gray-100 transition"
                    >
                      {suggestion}
                    </div>
                  ))
                ) : (
                  <p className="p-3 text-gray-500">No suggestions found</p>
                )}
              </div>
            )}
          </div>

          {/* Call to Action Button */}
          <button onClick={handleExploreBlogs}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg text-white font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Explore Blogs
          </button>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              Explore Our Blogs
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover curated insights, trends, and knowledge shared by our community.
              There's something for every tech enthusiast!
            </p>
          </div>

          {/* Blog Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            id="blog-container"
            ref={blogContainerRef}
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  state={blog}
                  className="block group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="absolute bottom-4 left-4 text-white font-medium text-sm px-2 py-1 bg-blue-600 rounded-md shadow-md">
                          {blog.tag || "Technology"}
                        </p>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.description}
                      </p>
                    </div>

                    {/* Footer Section */}
                    <div className="p-6 pt-0 border-t border-gray-200 text-sm text-gray-500 flex justify-between">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 12h.01M12 12h.01M16 12h.01M9 16h6"
                          />
                        </svg>
                        {blog.comments} comments
                      </span>
                      <span>{blog.time}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blogs found for "{searchTerm}"
              </p>
            )}
          </div>

          {/* View More Button */}
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg text-white font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Load More Blogs
            </button>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Blogs;
