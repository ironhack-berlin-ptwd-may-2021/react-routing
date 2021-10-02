import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const placesWhereIWorked = [
    {
      id: "123",
      name: "Cool company",
      city: "Barcelona",
      country: "Spain",
      jobTitle: "Specialist for cool things",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2017",
      jobEnded: ""
    },
    {
      id: "124",
      name: "Amazing company",
      city: "Madrid",
      country: "Spain",
      jobTitle: "Junior for cool things",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2015",
      jobEnded: "2017"
    },
    {
      id: "125",
      name: "Cool company",
      city: "Amsterdam",
      country: "Netherlands",
      jobTitle: "Associate Super Intern",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      jobStarted: "2013",
      jobEnded: "2015"
    }
  ]

  return (
    <div className="">
      <h2>Work Experience:</h2>
      {placesWhereIWorked.map((eachPlace, index) => {
        return (
          <div className="experience-content" key={index}>
            {/* this links to each experience detail page */}
            <h3><Link to={"/experience/" + eachPlace.id}>{eachPlace.name}</Link></h3>
            <h4>{eachPlace.jobTitle}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Experience;