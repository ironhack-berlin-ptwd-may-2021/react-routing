import React from 'react';

const ExperienceDetail = (props) => {

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

  // props.match.params.identifier

  let currentExperience = placesWhereIWorked.find((place) => place.id === props.match.params.identifier)

  return (
    <div className="">
      <div className="experience-content">
        <h3>{currentExperience.name}</h3>
        <p>{currentExperience.city}, {currentExperience.country}</p>
        <h4>{currentExperience.jobTitle}</h4>
        <p>{currentExperience.jobDescription}</p>

      </div>
    </div>
  )
}

export default ExperienceDetail;