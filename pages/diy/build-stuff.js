import Head from 'next/head'
import Navbar from '../../components/shared/navbar/navbar';
import styles from '../../styles/Diy.module.css'

export default function BuildStuff() {
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
                <h1>HOW TO BUILD NIGHT MARKET STUFF</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox }>
                        <h4>RE-BUILD A USED BIKE TRAILER</h4>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/bike-trailer.jpeg' />
                        </div>
                        <p><strong>At Night Market, we generally repurpose and re-vamp second-hand bike trailers by adding:</strong></p>
                        <ol>
                            <li>A wooden box: this provides a sturdier frame and can allow increased food capacity.</li>
                            <li>LED-lit signs and lights: improves the visibility of night market riders, thus increasing their safety during 
                            night-time food pick-ups and also increasing recognizability in the community.</li>
                        </ol>
                        <h4>YOU NEED</h4>
                        <p><strong>Materials</strong></p>
                        <ol>
                            <li>Bike trailer frame</li>
                            <li>LEDs: DAYBETTER Led Strip Light Waterproof 600leds 32.8ft, 10m Waterproof Flexible Color Changing RGB SMD 5050 600leds LED Strip 
                            Light Kit with 44 Keys IR Remote Controller and 12V Power Supply</li>
                            <li>Paint: exterior water-proof.</li>
                            <li>Primer: all purpose.</li>
                            <li>Mix of painting supplies such as rollers, trays, painters tape</li>
                            <li>Plywood: Sande plywood (¼ inch for light panels, ½ for the rest)</li>
                            <li>Wood (2x4): 2 in. x 4 in. x 96 in. Premium Kiln-Dried Whitewood Stud. for the inside of the light panels, and structure re-enforcement.</li>
                            <li>Measuring tape</li>
                            <li>Wood glue</li>
                            <li>Wood filler</li>
                            <li>Batteries: TalentCell Rechargeable 12V 6000mAh/5V 12000mAh DC Output Lithium Ion Battery Pack for LED Strip and CCTV Camera, 
                            Portable Li-ion Battery Bank with Charger, Black (Multi-led Indicator)</li>
                            <li>Mix of screws and bolts, different sizes</li>
                            <li>Zip ties</li>
                        </ol>
                        <p><strong>Tools</strong></p>
                        <ol>
                            <li>Drill</li>
                            <li>JigSaw</li>
                            <li>Circular saw</li>
                        </ol>
                        <h4>HOW TO</h4>
                        <p><strong>Recover a used bike trailer</strong></p>
                        <p>You can usually find used bike trailers on craiglist, facebook marketplace or buy nothing facebook groups. Once your night market 
                        chapter becomes know in your community, bike trailers will come to you :)</p>
                        <ul>
                            <li>The original trailer's structure/design will influence the amount of materials you have to use and how much work it's going to 
                            take to build the new one.</li>
                            <li>The capacity and weight it's able to carry will vary by maker. IF you can, it's good to check the weight it's designed to carry 
                            and take it into account when you plan what you will use this trailer for and the materials. A good brand to go for is Burley, 
                            they are sturdy, well made and can carry a decent amount of weight.</li>
                        </ul>
                        <p><strong>Design the trailer's structure</strong></p>
                        <p>Depending on the metal frame of the recovered trailer, and the planned use the trailer, the design may vary.</p>

                        <p><strong>Basic structure</strong></p>
                        <p>Things to consider:</p>
                        <ul>
                            <li>LED-lit sides will need double wood panels, that will “sandwich” the LEDs inside (for example, if there are 2 lateral panels, 
                            you will need to cut out 4 identical pieces). These will increase the weight of your trailer considerably.</li>
                            <li>If you want your trailer to be as lightweight as possible, consider minimizing areas with wood, using nets or leaving the metal 
                            frame structure bare.</li>
                            <li>The shape of your trailer should be as aerodynamic as possible.</li>
                            <li>Check the weight your frame is designed to load, and take that into account when you decide on the materials for your design. 
                            The intended cargo can vary, but usually ones you will find for free are dog trailers for kids or dogs that weigh around 
                            80-125 lb (around 45 kg).</li>
                            <li>Remember to ensure easy access for loading and unloading the food (ideally the back panel will be shorter can be moved on hinges)</li>
                        </ul>
                        <p><strong>Lateral panels</strong></p>
                        <p>The height of the lateral structure will define cargo capacity.</p>
                        <p>We have tried out 3 types of lateral panels:</p>
                        <ul>
                            <li>LED-lit wood side panels: this is the most visually pleasing but also heavy (in the picture, the red and purple trailers)</li>
                            <li>Wooden side panels: lighter than the LED signs but still sturdy. you can paint these to make them visually pleasing (in the picture, 
                            the blue trailer)</li>
                            <li>Metal frame of the trailer, nothing added: lightest most minimalist version, but will probably need to carry a plastic tub or 
                            cardboard box to contain the food (in the picture, the trailer furthest to the right)</li>
                        </ul>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/lateral-panel.jpeg' />
                        </div>
                        <p><strong>Front and back panels</strong></p>
                        <p>Typically shorter, and must allow easy access to the food inside the trailer. If you want your trailer to have only one illuminated 
                        LED sign, the back panel is a good choice</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/front-panel.jpeg' />
                        </div>
                        <p><strong>Bottom panel</strong></p>
                        <p>Thicker wood is recommended, and must adjust to the trailer metal frame, at least ½ inch plywood.</p>
                        <h4>Building steps</h4>
                        <p>1. Disassemble the recovered trailer, leaving just the metal structure</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step1.jpeg' />
                        </div>
                        <p>2. Cut pieces of plywood for the lateral, front, back, and bottom panels according to your design, using the circular saw.</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step2.jpeg' />
                        </div>
                        <p>3. You will sometimes need to cut some gaps into the panels to fit them around the metal frame. This will often be 
                            necessary for the bottom panel, especially if the frame has bends towards the ground or there are metal arches in the structure.</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step3.jpeg' />
                        </div>
                        <p>4. Cut pieces of 2X4 wood to support your structure. You can cut each one in half to make your individual beams. You will probably 
                            need 4 beams to support the lateral and front and back panels and also 4 beams along the bottom to attach the lateral panels to 
                            the bottom (floor) panel.</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step4.jpeg' />
                        </div>
                        <p>5. Cut 1 or 2 long pieces of wood that are a bit longer than the bottom panel (probably 3-4 inches are enough). You can use this 
                            to attach the floor panel to the metal trailer frame by drilling a long thick bolts through both the bottom beam and the floor, 
                            or using U-bolts for the same purpose.</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step5.jpeg' />
                        </div>
                        <p>6. Prime all wood panels and beams</p>
                        <p>7. Paint all wood panels and beams</p>
                        <p>8. Assemble the painted and primed pieces using appropriately sized screws and bolts.</p>
                        <p>The beams and panels should look something like this:</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step6.jpeg' />
                        </div>
                        <p>and you're done!!</p>
                        <div className={ styles.boxImage }>
                            <img src='/images/diy/step7.jpeg' />
                        </div>
                    </div>
                </div>
                <h1>HOW TO BUILD AN LED SIGN</h1>
                <div className={ styles.boxContainer }>
                    <div className={ styles.textBox } style={{ marginBottom: '2rem' }}>
                        <div className={ styles.boxImage }>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0_YyFlszEdI" title="YouTube video player" 
                            style={{ border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}