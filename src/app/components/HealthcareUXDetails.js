'use client'
import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import '../styles/details.css'
import Image from 'next/image'

const SurgestratDetails = ({path}) => {
  return (
    <div className='detailsPage'>
        <Navbar />
        <div className="detailsContainer">
            <div className="mainImgContainer">
                <Image
                    src="/images/emergency.png"
                    alt="healthcare ux image"
                    fill
                    priority={true}
                    quality={75}
                />
            </div>
            <div className="textContent">
                <div className="title">Emergency First-Aid Application - UX for healthcare</div>
                <div className="secondaryTitle">Background</div>
                <div className="desc">Out-of-hospital cardiac arrests (OHCA) present a significant health challenge with 55 cases per 100,000 person-years. Research shows immediate intervention through bystander CPR and AED use dramatically increases survival chances, yet despite 60% of cases being shockable, bystander shocks are applied in only 18.8% of incidents - highlighting a critical intervention gap.
This app aims to address this by connecting victims with nearby trained volunteers, providing location services, and delivering stress-appropriate guidance to reduce emergency response times.</div>
                <a className="visitBtn" href='https://v0-ux-requirements.vercel.app/' target='_blank'>View prototype</a>


                {/* <div className="secondaryImgContainer audienceList">
                    <Image
                        src="/images/audience.png"
                        alt="audience list image"
                        fill
                        priority={true}
                        quality={75}
                    />
                </div> */}

                <div className="secondaryTitle">User Research Insights</div>
                <div className="secDesc">
                    Through in-depth interviews with diverse users, I identified key personas and their needs: <br/> <br/>
                </div>
                <div className='persona'>Medical Professional</div>
                <ul className="user-interviews-list">
                        <li><i>Every second is of essence.</i></li>
                        <li>Primary Needs: Quick access to AED locations, verification systems</li>
                        <li>Key Concerns: App reliability causing delays during emergencies</li>
                </ul>
                
                <div className='persona'>Active Outdoor Person</div>
                <ul className="user-interviews-list">
                        <li><i>I would love something physical... maybe some buttons or motion action.</i></li>
                        <li>Primary Needs: Physical interaction options, clear directional guidance</li>
                        <li>Key Concerns: Privacy regarding location tracking, navigation in unfamiliar areas</li>
                </ul>

                <div className='persona'>Parent</div>
                <ul className="user-interviews-list">
                        <li><i>Staying calm was the biggest challenge.</i></li>
                        <li>Primary Needs: Quick access to guidance, visual instructions</li>
                        <li>Key Concerns: Emotional management during family emergencies</li>
                </ul>


                <div className="secondaryTitle">Key Research Insights</div>

                <div className="secDesc">Our research revealed several critical needs across all user types:</div>
                <div className="tertiaryTitle">Emergency Activation Challenges</div>
                <ul className="key-insights">
                    <li>Users struggle with touchscreen interfaces during high-stress situations</li>
                    <li>Need for alternative activation methods (physical buttons, voice commands)</li>
                    <li>Countdown timers may introduce harmful delays in critical situations</li>
                </ul>

                <div className="tertiaryTitle">Information Presentation Issues</div>
                <ul className="key-insights">
                    <li>Text-heavy instructions difficult to process during emergencies</li>
                    <li>Medical terminology creates barriers for non-professional users</li>
                    <li>Information overload during high-stress situations</li>
                </ul>

                <div className="tertiaryTitle">Navigation and Location Concerns</div>
                <ul className="key-insights">
                    <li>Difficulty finding resources in unfamiliar environments</li>
                    <li>Concerns about location privacy and continuous tracking</li>
                    <li>Need for offline functionality in remote areas</li>
                </ul>

                <div className="tertiaryTitle">Accessibility Requirements</div>
                <ul className="key-insights">
                    <li>Small text and touch targets problematic for many users</li>
                    <li>Lack of language options creates barriers for non-English speakers</li>
                    <li>Need for multi-modal feedback (visual, audio, haptic)</li>
                </ul>


                <div className="secondaryTitle">Common User Needs & Design Requirements</div>
                <div className="secDesc">Based on our analysis, we prioritized these critical requirements:</div>
                <div className="tertiaryTitle">Emergency Activation</div>
                <ul className="user-needs">
                    <li>One-touch emergency button with universal recognition</li>
                    <li>Need for alternative activation methods (physical buttons, voice commands)</li>
                    <li>Countdown timers may introduce harmful delays in critical situations</li>
                </ul>

                <div className="tertiaryTitle">Information Presentation Issues</div>
                <ul className="user-needs">
                    <li>Text-heavy instructions difficult to process during emergencies</li>
                    <li>Medical terminology creates barriers for non-professional users</li>
                    <li>Information overload during high-stress situations</li>
                    <li>Responder coordination and role assignment</li>
                </ul>

                <div className="tertiaryTitle">Navigation and Location Concerns</div>
                <ul className="user-needs">
                    <li>Difficulty finding resources in unfamiliar environments</li>
                    <li>Concerns about location privacy and continuous tracking</li>
                    <li>Need for offline functionality in remote areas</li>
                </ul>

                <div className="tertiaryTitle">Accessibility Requirements</div>
                <ul className="user-needs">
                    <li>Small text and touch targets problematic for many users</li>
                    <li>Lack of language options creates barriers for non-English speakers</li>
                    <li>Need for multi-modal feedback (visual, audio, haptic)</li>
                </ul>

                
                <div className="secondaryTitle">Prototype prior to usability testing</div>
                <iframe 
                  src="https://www.youtube.com/embed/nWrghOjJftw" 
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                />

                <div className="secondaryTitle">AI Evaluation of the prototype</div>
                <div className="secDesc">Prior to live testing, the AI-driven prototype analysis identified several critical issues: emergency activation delays from the 10-second countdown, unfamiliar button design, overcomplicated navigation with nested tabs, text-heavy instructions, and accessibility concerns with small touch targets. The AI correctly flagged the need for multimodal feedback systems and simplified information architecture. This preliminary evaluation provided a focused framework for our human testing, allowing us to validate these concerns while discovering nuances that only emerge through direct user interaction.</div>



                <div className="secondaryTitle">Usability Testing Results</div>
                <div className="secDesc">Usability testing conducted with three users (tech-savvy, mid-30s, elderly) showed promising results:</div>
                <div className="usabilityImgContainer">
                    <Image
                        src="/images/usability-table.png"
                        alt="healthcare ux image"
                        fill
                        priority={true}
                        quality={75}
                    />
                </div>
                <div className='tertiaryTitle'>Some interesting insights:</div>
                <ul className="insights">
                    <li>High scores for emergency button accessibility (5/5)</li>
                    <li>Lower scores for text-heavy instructions (3.5/5)</li>
                </ul>


                <div className="secondaryTitle">Prototype following usability testing</div>
                <iframe 
                  src="https://www.youtube.com/embed/jGpRUMUs3v0" 
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                />

                

                <div className="secondaryTitle">AI Evaluation vs. Human Testing</div>
                <div className="evalContainer">
                    <Image
                        src="/images/eval-comparison.png"
                        alt="healthcare ux image"
                        fill
                        priority={true}
                        quality={75}
                    />
                </div>
                <div className="tertiaryTitle">Areas Where AI Correctly Identified Issues:</div>
                <ul className="key-insights">
                    <li>Emergency activation delay and countdown concerns</li>
                    <li>Over-reliance on text in emergency instructions</li>
                    <li>Navigation complexity and information architecture issues</li>
                    <li>Small touch targets creating accessibility barriers</li>
                </ul>

                <div className="tertiaryTitle">Areas Where Human Testing Revealed Different Insights:</div>
                <ul className="key-insights">
                    <li>AI underestimated the significance of medical terminology confusion (like "AED")</li>
                    <li>Human testing showed greater difficulty with first aid guides (3.5/5 rating)</li>
                    <li>Senior users had specific needs (larger text, language localization) that AI didn't fully anticipate</li>
                    <li>Real users expressed stronger concerns about specific navigation paths than AI predicted</li>
                </ul>
                <div className="secDesc">
                The AI analysis served as an excellent starting point, correctly identifying 70% of the critical usability issues. However, human testing provided essential nuance, emotional context, and unexpected friction points that AI couldn't predict. This combination of AI evaluation followed by human testing proved highly effective at identifying and prioritizing design improvements.
                <br /><br />
                As one example, while AI identified that the CPR guide might be challenging to use, actual users provided specific feedback about precisely why the guide was difficult (too text-heavy) and suggested concrete improvements (more visual step-by-step guidance). Similarly, AI correctly predicted navigation challenges, but human testing revealed exactly which navigation paths were most problematic.
                <br /><br />
                This demonstrates the value of combining AI efficiency with human testing insights to create a more robust design process.
                </div>

                <div className="secondaryTitle">AI's role in the Research, Design and Development Process</div>
                <div className="secDesc">Artificial intelligence played a crucial role throughout our research and design process:</div>
                <div className="tertiaryTitle">Market Research Enhancement</div>
                <ul className="key-insights">
                    <li>AI tools (Claude and ChatGPT) expedited competitive analysis</li>
                    <li>Enabled comprehensive survey of existing applications within hours</li>
                    <li>Synthesized design principles from multiple sources efficiently</li>
                </ul>

                <div className="tertiaryTitle">Interview Guide Development</div>
                <ul className="key-insights">
                    <li>AI helped create comprehensive interview questions</li>
                    <li>Designed realistic emergency scenarios without causing distress</li>
                    <li>Generated questions exploring psychological barriers to emergency response</li>
                </ul>

                <div className="tertiaryTitle">Additional Perspective Generation</div>
                <ul className="key-insights">
                    <li>Simulated parent/caregiver perspective to complement real user interviews</li>
                    <li>Provided consistent response patterns using the same question protocol</li>
                    <li>Added valuable insights about family emergency scenarios</li>
                </ul>

                <div className="tertiaryTitle">Research Analysis & Synthesis</div>
                <ul className="key-insights">
                    <li>Assisted in analyzing lengthy interview transcripts</li>
                    <li>Identified patterns across different user types</li>
                    <li>Extracted meaningful quotes highlighting key needs and pain points</li>
                </ul>

                <div className="tertiaryTitle">Prototype Generation and Deployment</div>
                <div className="secDesc">Vercel's V0 was used for prototype generation and further refinement.</div>

                <div className="secondaryTitle">Conclusion</div>
                <div className="secDesc">The first aid app journey from research to design revealed crucial insights about emergency response behaviors. By identifying key barriers like text-heavy instructions and complex navigation, an interface was created that prioritizes multi-modal interaction, visual guidance, and accessibility. The combination of AI-driven evaluation and human testing proved invaluable, with each approach revealing unique insights. Vercel's V0 enabled rapid prototype generation and refinement based on these findings. The resulting design strikes the critical balance between simplicity and functionality needed in high-stress emergency situations, potentially improving bystander intervention rates and ultimately saving lives.</div>
            </div>
            
        </div>
        <BottomNav></BottomNav>
    </div>
  )
}

export default SurgestratDetails