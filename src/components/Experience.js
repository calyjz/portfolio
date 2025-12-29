import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import experience from '../static/experience.json';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="title-header">
                <h3>━━ Experience</h3>
            </div>

            <div className='experience-timeline'>
                <Timeline>
                    {experience && experience.map(({ company, start, title, description }) => 
                        <TimelineItem>
                            <TimelineOppositeContent sx={{paddingLeft: 0, maxWidth:'150px'}}>
                                <h4>{start}</h4>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                                <TimelineConnector sx={{ minHeight: '150px'}} />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h4>{company}</h4>
                                <p><b>{title}</b></p>
                                <p>{description}</p>
                            </TimelineContent>
                        </TimelineItem>
                    )}
                    </Timeline>
            </div>
        </div>
        
        
    );
}

export default Experience;