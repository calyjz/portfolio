import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="title-header">
                <h3>━━ Experience</h3>
            </div>

            <div className='experience-timeline'>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{paddingLeft: 0, maxWidth:'150px'}}>
                            <h4>May 2025</h4>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                            <TimelineConnector sx={{ minHeight: '200px'}} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4>Amazon Web Services</h4>
                            <p><b>Software Developer Intern</b></p>
                            <p>Modernized db backup workflows for critical RDS databases</p>
                            </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{paddingLeft: 0, maxWidth:'150px'}}>
                            <h4>Sept 2024</h4>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector sx={{ minHeight: '200px'}} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4>Canadian Space Agency</h4>
                            <p><b>Full-Stack Developer Intern</b></p>
                            <p>Developed an internal booking system, synchronizing events with Microsoft Calendar</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{paddingLeft: 0, maxWidth:'150px'}}>
                            <h4>May 2024</h4>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector sx={{ minHeight: '200px'}} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4>Nanostics</h4>
                            <p><b>Software Developer Intern</b></p>
                        </TimelineContent>
                    </TimelineItem>
                    </Timeline>
            </div>
        </div>
        
        
    );
}

export default Experience;