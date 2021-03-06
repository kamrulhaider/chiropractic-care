import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {

    // data 
    const totalData = [{
        "key": 101,
        "name": "Therapeutic Exercise",
        "details": "Chiropractors commonly prescribe specific strengthening exercises for their patients with back, neck, and extremity problems. These exercises can help decrease pain, prevent muscle deterioration, promote joint health, increase strength, stability and range of motion, and protect against new or recurring injuries.",
        "img": "https://images.pexels.com/photos/8312824/pexels-photo-8312824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 4,
        "more": "Your chiropractor will show you how to perform the exercises and supervise you until you are comfortable doing them on your own. It's important to keep up with your exercises as prescribed (similarly to drug prescriptions). Studies show that individuals who follow their exercise instructions heal faster than those who do not.",
        "price": 10000
    },

    {
        "key": 102,
        "name": "Therapeutic Stretches",
        "details": "Following an injury, therapeutic stretching is an important way to prevent scar tissue from forming. Even after the spinal injury has healed, maintaining a regular stretching program helps keep tissues flexible, increases mobility, and protects you from new injuries.",
        "img": "https://images.pexels.com/photos/8313222/pexels-photo-8313222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 3,
        "more": "As with exercise, your chiropractor will instruct you on proper stretching techniques and will supervise you until you are comfortable enough to do them on your own.",
        "price": 44000
    },
    {
        "key": 103,
        "name": "Spinal Traction",
        "details": "Many chiropractors use spinal traction, in which traction devices are applied to distract areas of the spine. This treatment helps to gently separate the vertebrae resulting in disc decompression, reduced nerve root pressure, and less pain.",
        "img": "https://images.pexels.com/photos/8312866/pexels-photo-8312866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 8,
        "more": "Good health is much more than the absence of pain or disease. The lifestyle choices you make on a daily basis can greatly affect your long-term health. We now know that years of seemingly small unhealthy lifestyle choices can, over time, turn into very large health problems.",
        "price": 10500
    },
    {
        "key": 104,
        "name": "Soft Tissue Manual Therapy",
        "details": "Chiropractors use a variety of hands-on soft tissue therapies to improve the function of the soft tissues (muscles, ligaments, tendons, and joint capsules). These include pin and stretch, also known under a proprietary name Active Release Technique (ART), and instrument-assisted soft tissue mobilization (Graston Technique).",
        "img": "https://images.pexels.com/photos/8312843/pexels-photo-8312843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 5,
        "more": "Your chiropractor will talk to you about your lifestyle choices, help you sort through and identify unhealthy health habits, and give you practical strategies to deal with and manage them. As you can see, chiropractic medicine is more than just spinal manipulations. Chiropractors use a variety of treatment modalities to help the body to heal itself and return the patient to a pain-free and healthy life.",
        "price": 55000
    },
    {
        "key": 105,
        "name": "Physical Therapy Modalities",
        "details": "This type of therapy uses light electrical pulses that are transmitted to specific areas of the body through electrodes placed on the skin. There are many different types of electrical stimulation. Some are more beneficial for pain relief or to reduce inflammation, some best treat muscle spasm, and some actually cause muscles to contract in order to reduce muscle atrophy. Some forms of electrical stimulation have combination effects.",
        "img": "https://images.pexels.com/photos/8313219/pexels-photo-8313219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 5,
        "more": "Therapeutic ultrasound is a form of deep heat therapy created by sound waves. When applied to soft tissues and joints, the sound waves are a form of micro-massage that help reduce swelling, increase blood flow, and decrease pain, stiffness, and muscle spasms.",
        "price": 50000
    },
    {
        "key": 106,
        "name": "Diet and Nutritional Counseling",
        "details": "Studies have shown that poor diet and nutritional imbalances contribute to several serious illnesses, such as heart disease, stroke, diabetes, and cancer. Chiropractors are specifically trained in diet and nutritional counseling. Your chiropractor can design a nutritional program specific to your needs that can help you maintain good health and minimize the risk of developing these serious health conditions.",
        "img": "https://images.pexels.com/photos/8313189/pexels-photo-8313189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "session": 4,
        "more": "Good health is much more than the absence of pain or disease. The lifestyle choices you make on a daily basis can greatly affect your long-term health. We now know that years of seemingly small unhealthy lifestyle choices can, over time, turn into very large health problems.",
        "price": 39000
    }]



    const { therapyId } = useParams();

    const singleItem = totalData.find(element => element.key === parseInt(therapyId));

    return (
        <div className="container p-5">
            <Card>
                <Card.Img variant="top" src={singleItem.img} />
                <Card.Body>
                    <Card.Title>{singleItem.name}</Card.Title>
                    <Card.Text>
                        {singleItem.details}
                    </Card.Text>
                    <Card.Text>
                        {singleItem.more}
                    </Card.Text>
                    <Card.Text>
                        Price: TK. {singleItem.price}
                    </Card.Text>
                    <Card.Text>
                        Session: {singleItem.session} times
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;