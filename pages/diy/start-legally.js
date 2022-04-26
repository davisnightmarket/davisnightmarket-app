import Head from 'next/head'
import Navbar from '../../components/shared/navbar/navbar';
import styles from '../../styles/Diy.module.css'

export default function StartLegally() {
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
                <h1>HOW TO NIGHT MARKET LEGALLY!</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox }>
                        <h4>LIABILITY</h4>
                        <p>DISCLAIMER: The following only applies to the U.S.</p>
                        <h4>TLDR</h4>
                        <p>Here's a handy LIABILITY FLOW CHART that will get you started.</p>
                        <p>Also please check out our friends at the Freedge's manifesto the Liability Myth , that goes into detail about the 
                        stigma-perpetuating and non-profit-industrial-complex-supporting implications of all the below.</p>
                        <p>For those who want to get in the nitty gritty… keep reading</p>
                        <p>So you need to know that</p>
                        <p><strong>1. Getting sued for donating food is not a thing</strong></p>
                        <p>This report by the University of Arkansas School of Law found that</p>
                        <div className={ styles.exampleEmail }>
                            <p>“lawsuits arising out of the donation or provision of recovered food are extremely uncommon. Indeed, <strong>a thorough search 
                                of filings and review of reported decisions did not turn up a single case that involved food donation-related liability</strong> 
                                or any attempts to get around the protections offered by the Bill Emerson Act. Additionally, several leading food recovery 
                                experts and antihunger advocates report that they are unaware of any such actual or threatened lawsuits. The absence of 
                                litigation or other disputes related to food donation demonstrates that fear of lawsuits or other negative publicity related 
                                to mishaps with donated food are overstated and largely illusory barriers to food recovery.”</p>
                        </div>
                        <p><strong>2. You and your donors are protected under federal law… as long as you are a non-profit</strong></p>
                        <p>If you're already a non-profit, the federal Bill Emerson Good Samaritan Food Donation Act is your best friend, and will keep you 
                        safe as long as you fulfill these 4 requirements:</p>
                        <ol>
                            <li>The donation must be made to a nonprofit organization.</li>
                            <li>The food must be donated to a nonprofit organization in good faith, meaning that the food must be donated with the honest belief 
                            that it is safe to eat</li>
                            <li>The donated items must be either apparently wholesome food or apparently fit grocery products</li>
                            <li>The nonprofit organization that receives the donated food must distribute it to needy individuals, who must not pay anything 
                            of monetary value for the donated food</li>
                        </ol>
                        <p>For more info:</p>
                        <p>Liability Protection Food Donation.</p>
                        <p><strong>Cool. I'm not a non-profit. Now what?</strong></p>
                        <p>It's ok! You have options</p>
                        <p><strong>1. You're probably fine anyway (see point 1 above)</strong></p>
                        <p>Also, seriously, you're fine if you're in certain states (like CA, CO), so it's worth looking at the specifics for your state. 
                        Also, good for you, for not being a part of this horrendous system :)</p>
                        <p><strong>2. Get a fiscal sponsor</strong></p>
                        <p>A fiscal sponsor is basically a 501(c)(3) non-profit that agrees to sponsor you such that you share their 501(c)(3) non-profit status. 
                        They also receive your money, so you'll have to send them a budget once a year (which can be $0).</p>
                        <p>Relationships with fiscal sponsors may vary, but, luckily, we have a solution for you!</p>
                        <p>Our fiscal sponsor, Left Lovers (yes, it's a real non-profit, not a movie about sexy vampires or a marxist cell) is very happy to 
                        sponsor food recovery efforts without taking a chunk of your money. The only thing they might ask is a yearly insurance fee to cover 
                        your operation. If you're interested in being sponsored by Left Lovers, fill in this fiscal sponsorship form and contact ernst@freedge.org.</p>
                        <p>If Left Lovers sounds too much like a free-love anarchist commune for you, here's a database of local fiscal sponsors.</p>
                        <div className={ styles.exampleEmail }>
                            <p>“If you are interested in some of the different ways fiscal sponsorship can be done, Gregory Colvin and Stephanie Petit have a good 
                            summary of the different types of fiscal sponsorships”</p>
                        </div>
                        <p>(paraphrased from big door brigade)</p>
                        <p><strong>3. Become a 501(c)(3) non-profit</strong></p>
                        <p>Might be worth it depending on your needs, but i'm sure not gonna get into that here :)</p>
                        <p><strong>COMPARE YOUR OPTIONS</strong></p>
                        <p>Here's a good comparison of your options for acquiring non-profit-status from big door brigade.</p>
                        <p>You might have noticed me citing big door brigade twice in a row, and that's because it's a compilation of resources for mutual aid 
                        orgs that's worth checking out and because everything Dean Spade touches is gold.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}