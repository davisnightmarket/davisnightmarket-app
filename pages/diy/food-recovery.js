import Head from 'next/head'
import Navbar from '../../components/shared/navbar/navbar';
import styles from '../../styles/Diy.module.css'

export default function FoodRecovery() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Food Redemption</title>
            <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
        </Head>
        <Navbar status={[ false, false, false, false, true, false ]} />
        <div className={ styles.scrollable }>
            <div className={ styles.subMain }>
                <h1>FOOD RECOVERY!</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox }>
                        <h4>Materials</h4>
                        <p><strong>Equipment, utensils and food containers must all be food-grade!!</strong></p>
                        <ol>
                            <li>Boxes: carboard, food-grade</li>
                            <li>Hand sanitizer</li>
                            <li>Utensils: store these in a plastic bag or a ziploc and clean them when you're done</li>
                            <ul>
                                <li>Spoons</li>
                                <li>Ladles</li>
                                <li>Tongs</li>
                                <li>Sharpie</li>
                            </ul>
                            <li>Paper towels/napkins</li>
                            <li>Table cover</li>
                        </ol>
                        <p><strong>COVID precautions require</strong></p>
                        <ol>
                            <li>Gloves</li>
                            <li>Mask</li>
                        </ol>
                        <h4>Team</h4>
                        <p>Recommended 2 people per location, to minimize the time spent distributing food into boxes. It is recommended to have the same 
                        people performing the same pick-ups to establish rapport with the establishment's employees. In addition, calling the donor 
                        business in advance to ask if they have anything to offer is good practice.</p>
                        <h4>Transport</h4>
                        <p>At Night Market we're committed to sustainability: we believe that burning fossil fuels to prevent food waste from emitting methane 
                        in a landfill is something of an oxymoron. That's why, where local bike infrastructure allows, we perform all food pick-ups using 
                        bike trailers. To learn how to build your own LED-lit bike trailer, check out the section on how to build night market stuff</p>
                    </div>
                </div>
                <h1>COMMUNITY!</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox }>
                        <p>Building community is one of the goals of Night Market. Food brings people together, and at Night Market we seek to welcome folx from all walks 
                        of life. Making the redistribution of donated food an enjoyable experience where we can gather, get to know each other and share a meal helps 
                        alleviate the stigma associated with food insecurity and free things (because capitalism).</p>

                        <p>Talking with and showing love to strangers might be the most important part of Night Market; people are often not just hungry for food but 
                        for company, and this was especially clear during the pandemic.</p>

                        <h4>YOU NEED</h4>
                        <p><strong>Materials</strong></p>
                        <ol>
                            <li>Speaker (For music!!)</li>
                            <li>LED lights</li>
                        </ol>
                        <p>People will see the event at night and creates a vibe</p>

                        <h4>Team</h4>
                        <p>It's helpful to have “greeters” or “welcomers”, that is, team members with the specific role of engaging with the community apart from those 
                        serving the food.</p>
                    </div>
                </div>
                <h1>DONOR RECRUITMENT!</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox }>
                        Make a database of all possible donors. Include:
                        <ol>
                            <li>Closing time</li>
                            <li>Contact (email/phone of establishment)</li>
                            <li>Name of manager</li>
                            <li>When manager's in the establishment</li>
                            <li>Status of contact (have you emailed them, have you gone in person, what did they say)</li>
                            <li>If they've agreed to donate or not</li>
                        </ol>
                        <h4>Email</h4>
                        <ul>
                            <li>Emails should be sent from the oficial night market email.</li>
                            <li>Link your website or social media to show legitimacy.</li>
                        </ul>
                        <p><strong>Here's an email template:</strong></p>
                        <div className={ styles.exampleEmail }>
                            <p>Dear (contact name):</p>
                            <p>This is (your name), (your role) of the [insert your location] Night Market. I’m contacting you to invite your (restaurant/grocery store/bakery) 
                            (name of establishment) to participate in our food recovery program. We are a non-profit organization that has been active in Davis since 2019, 
                            reducing food waste and food insecurity in our community. We recover food that would otherwise go to waste from various businesses in Davis at 
                            closing time, and immediately take it to Central Park to redistribute it freely to those in need.</p>
                            <p>We currently hold a Food Service permit from [insert your location] County that allows us to distribute pre-cooked food items, as well as produce 
                            and non-perishables. All donations are legally covered by the Federal Good Samaritan Food Donation Law of 2018, protecting the donating business. 
                            All you have to do is give us a time and have your left-overs ready for us, and we’ll show up and do the rest. Our volunteers are in charge of 
                            portioning the food into compostable containers and transporting it to the [insert your location] using bike trailers, because, yes, we also strive 
                            for making our activities zero emissions!</p>
                            <p>During the pandemic we have had an increase of people seeking our service and are looking to increase our offerings. Do you want to join the 
                            [insert your donors] in helping your community and the environment? It’s easy! Currently, we hold our events four nights a week (Monday through 
                            Friday), and we can accommodate one or all of these nights.</p>
                            <p>Looking forward to hearing from you!</p>
                            <p>(your name)</p>
                        </div>

                        <h4>Visit establishments in person</h4>
                        <p><strong>YOU NEED</strong></p>
                        <ol>
                            <li>Liability flow chart</li>
                            <li>Marketing flyer: with email and website (to look legit)</li>
                            <li>Copy of the health permit</li>
                        </ol>
                        <p><strong>HOW TO</strong></p>
                        Ask to speak to the manager. Always make a good first impression
                        <p><strong>Template of in person pitch:</strong></p>
                        <div className={ styles.exampleEmail }>
                            <p>Hi, my name is [___________] , may I speak to the restaurant owner? I am with the Davis Night Market and our non-profit organization 
                            recovers leftover food at the end of the night from restaurants around town to reduce waste, and feed the people in need. We are 
                            partnered with the Yolo County Food Bank and UC Davis and received our permit from Yolo County. I just wanted to ask you, what do you 
                            do with the leftovers once your restaurant closes?</p>
                            <p>(restaurant owner answers)</p>
                            <p>I wanted to extend this opportunity to you to partner with us and join other restaurants in reducing waste on your end, and 
                            letting us do the work in packaging the leftovers, and feeding our people right here in Davis. As an exchange, we will assist 
                            with increasing your Yelp Reviews along with the opportunity to use this as a tax write off. Let me go over the liability 
                            flowchart with you</p>
                            <p>(show restaurant owner how this flowchart works)</p>
                        </div>
                        <h4>Liability</h4>
                        <p>Here's a handy LIABILITY FLOW CHART to assuage donor's fears regarding liability. For more info check out our section on liability</p>
                        <h4>Donor FAQs</h4>
                        <div className={ styles.faqSection }>
                            <p><strong>DO YOU HAVE A PERMIT?</strong></p>
                            <p>Yes, we do! We received our permit from Yolo County as well as an event permit from the city of Davis.</p>
                            <p><strong>UNDER WHAT CATEGORY LEVEL ARE YOU?</strong></p>
                            <p>We are under category 2 of LSCFO (limited service charitable feeding operation) where we only accept the prepared foods.</p>
                            <p><strong>AM I GOING TO BE LIABLE?</strong></p>
                            <p>No, you will not be liable! You are protected by the Federal Good Samaritan Food Donation Act (AB-1219), which says you can't 
                            be sued for giving away food to a non-profit.</p>
                            <p><strong>I WOULD LIKE TO USE THIS DONATION OPPORTUNITY AS A TAX WRITE OFF:</strong></p>
                            <p>You sure can! Please email us at nightmarket@freedge.org</p>
                            <p><strong>WHO DOES THE PACKAGING? I DO NOT WANT MY OWN WORKERS TO PACKAGE:</strong></p>
                            <p>Not to worry! Our volunteers will do all the work in packaging and you do not have to lift a finger on your end.</p>
                            <p><strong>WHO PROVIDES THE PACKAGING BOXES? THIS WILL CUT INTO MY PROFITS IF I PROVIDE MY BOXES:</strong></p>
                            <p>Nothing will cost you! We provide our own small package boxes during this process, however, if you want to use your own packaging 
                            to promote your brand, you may do so.</p>
                            <p><strong>I DONATE FOOD ALL THE TIME, WHY SHOULD I DONATE WITH YOU?</strong></p>
                            <p>Donating to us feeds our friends in the community. Not only does your contribution help them, but we are also helping you eliminate 
                            food waste at the end of the day. Composting can be very expensive, we are helping you eliminate that extra leg work to do that.</p>
                            <p><strong>WHAT ENSURES THAT YOUR NONPROFIT IS LEGITIMATE?</strong></p>
                            <p>We are a sister npo to Freedge and are partnered with the Aggie Compass, an initiative of UC Davis, Food Recovery Network, a student 
                            organization at UC Davis, the UC Davis Pantry, as well as Land&Ladle.</p>
                            <p><strong>HOW MUCH OF A COMMITMENT DO YOU NEED FROM US?</strong></p>
                            <p>We hope to collect food every day of the week.</p>
                        </div>
                    </div>
                </div>
                <h1>VOLUNTEER RECRUITMENT</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox } style={{ marginBottom: '2rem' }}>
                        <h4>Volunteer training process</h4>
                        <ol>
                            <li>Visit a night market event, assisting with setup, on nights staffed by one of the volunteer trainers. Trainers will outline the various 
                            types of assistance that is needed. Different roles new volunteers could be interested in include:
                                <ul>
                                    <li>food pick-up</li>
                                    <li>restaurant recruiting</li>
                                    <li>social media</li>
                                    <li>build</li>
                                </ul>
                            </li>
                            <li>Get trained on how to hook a bike trailers to your bike, orient with the items needed (where all the materials needed for food recovery 
                            are located), and have a safety check completed on your bike. Contact bike team.</li>
                            <li>Shadow a pick up with one of the pick-up team members, retrieving a bike trailer (and items) from HQ as needed.</li>
                            <li>Figure out where you can be most helpful. What nights, what efforts, and what else you are able to help out with. Communicate with the 
                            volunteer trainers via email or text.</li>
                        </ol>
                        <p><strong>Methods of communication though volunteer training:</strong></p>
                        <ol>
                            <li>Email and text</li>
                            <li>Slack, added after they completed a shadow night</li>
                        </ol>
                        <h4>Methods of recruitment</h4>
                        <ul>
                            <li>Messages of interest on social media</li>
                            <li>Messages of interest by email, through website, flyers …</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}