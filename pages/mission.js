import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Mission.module.css'

export default function Mission() {
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
      <Navbar status={[ false, false, false, true, false ]} />
      <div className={ styles.scrollable }>
        <div className={ styles.main }>
          <div className={ styles.missionSection }>
            <h1>Our Mission</h1>
            <div className={ styles.boxContainer }>
              <div className={ styles.textBox }>
                <p>
                  The Night Market is a community-based, environmentally-sustainable food recovery organization that recovers and redistributes cooked and non-perishable food that would otherwise go to waste in a stigma-free environment. The Night Market’s mission is to reduce a community’s carbon footprint and increase equitable access to food through organized collective action. We strive for a non-hierarchical, anti-racist, mutual aid operating structure steeped in the ideals of radical inclusivity, climate change awareness, and dance parties :) We aim to ignite a movement of sustainable, inclusive food waste recovery and redistribution that can be replicated anywhere, empowering people and building community in the process.
                </p>
              </div>
            </div>
            <h1>Our Core Values</h1>
            <div className={ styles.boxContainer }>
              <div className={ styles.textBox }>
                  <h4>Environmental sustainability</h4>
                  <p>We commit to disengage from practices that harm our communities and our planet in order to work toward a healthier future for all. 
                  We aim to move all food without the use of fossil fuels.</p>
                  <h4>Inclusivity</h4>
                  <p>We do not discriminate based on age, race, color, gender, gender expression, sexuality, ability, housing, or economic status. 
                  We do not require proof of need to receive food.</p>
                  <h4>Equity and justice</h4>
                  <p>We promote food justice, environmental justice, racial justice, social justice, and all other non-violent justices to dismantle 
                  oppressive forces that drive inequity.</p>
                  <h4>Community and collaboration</h4>
                  <p>We integrate our organization and its activities with other individuals, entities and agencies focused on mutual aid in our community. 
                  We share our knowledge and food freely.</p>
                  <h4>Learning and humility</h4>
                  <p>We keep our minds and hearts open to engage in a constant learning/unlearning process to better take care of each other and our community.</p>
                  <h4>Working with joy</h4>
                  <p>“All of our work for change can be rooted in the comfort and joy of being connected to one another, accompanying one another, and 
                  inspired by each other.”</p>
                  <p>(paraphrased from Mutual Aid, Dean Spade 2020)</p>
              </div>
            </div>
            <h1>Our Goals</h1>
            <div className={ styles.boxContainer }>
              <div className={ styles.textBox } style={{ marginBottom: '2rem' }}>
                <h4>Decrease food waste</h4>
                <p>Operating at a hyper-local scale, we are able to recover and quickly redistribute nutritious food that might be beneath the 
                quantity threshold for larger organizations.</p>
                <h4>Increase stigma-free food access</h4>
                <p>In contrast to other food recovery organizations, we do not require proof of need for community members to receive food donations, 
                thus reducing social stigma and barriers associated with food access. The goal is to encourage people to view collecting excess food 
                as a positive experience and to reduce the stigma around food insecurity, all while dramatically increasing access.</p>
                <h4>Promote environmental sustainability</h4>
                <p>The food recoveries we perform are as sustainable as possible. We use bike carts for transporting food and compostable waxed carton 
                boxes for packaging. In this way, we also bring environmental awareness to the issues associated with food waste and transportation.</p>
                <h4>Build and empower community</h4>
                <p>We create a space, curated with lights and music to provide a safe and inviting environment where community members can come together 
                over food, and provide a framework to engage in mutual aid and support each other outside of the system. In this spirit we engage and 
                support other similarly aligned organizations and actions in our community.</p>
                <h4>Bring awareness of food waste, food access and insecurity, and sustainability</h4>
                <p>Creating awareness about the issue of food waste in the context of food insecurity and climate change, and proving that another way 
                is possible is an important part of our ethos. Our bike carts and redistribution events are lighted with LEDs, thus giving visibility 
                to the amounts of food waste and bringing attention to our net-zero choice of transportation.</p>
                <h4>Create a community-based food waste recovery and redistribution that can be replicated anywhere</h4>
                <p>The overarching aim of our organization is to ignite a movement of environmentally sustainable and inclusive food waste recovery 
                and redistribution that can be replicated anywhere, empowering communities to close the gap between food waste and food insecurity.</p>
                <h4>Replicate this in your community!!</h4>
                <p>Check out our <Link href='/diy'><span className={ styles.diyBtn }>DIY</span></Link> section to learn how to get started with Night Market in your own community :)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
