import React, {useState} from 'react';

const ProjectItem = ({name, description, techUsed, teammates, repoLink, imgs}) => {
    const [counter, setCounter] = useState(0)
    const handleNext = () => {
        counter + 1 < imgs.length ? setCounter(counter+1) : setCounter(0)
    }

  return(
    <div className='mr-auto ml-auto w-3/4 mt-20 mb-5'>
        <div className='block justify-between lg:flex'>
            <div className='md:w-1/2'>
                <h1 className='text-5xl my-5' style={{textShadow: "4px 4px rgba(117, 19, 93, 0.73)"}}>{name}</h1>
                
                <p>{description}</p>
                <br></br>
                
                <p><span style={{textShadow: "3px 3px rgba(117, 19, 93, 0.73)"}} className='text-xl'>Languages/Frameworks used:</span> {techUsed}</p>
                <br></br>
                
                {teammates.length === 0 ? console.log() : <p className='text-xl'><span style={{textShadow: "3px 3px rgba(117, 19, 93, 0.73)"}}>Teammates:</span></p>}
                {
                    teammates.length === 0 ? console.log() : teammates.map((teammate) => (
                        <li>{teammate}</li>
                    )) 
                }
            </div>
            <div className='mx-auto lg:ml-10 mt-3 md:w-1/2'>
                <img className='rounded-xl mt-6' src={imgs[counter]} alt={name} width="3000px" height='3000px'></img>
                <div className='flex-row-reverse mt-1'>
                    <i onClick={handleNext} className="fa fa-long-arrow-right" aria-hidden="true" style={{fontSize: "25px", marginLeft: '94%'}}></i>
                </div>
                <div className='text-center text-lg hover:text-blue-300'><a href={repoLink} target='_blank' rel="noreferrer"><i className="devicon-github-original colored" style={{fontSize: "25px"}}></i> Repo Link</a></div>
            </div>
        </div>
    </div>
  );
};

export default ProjectItem;
