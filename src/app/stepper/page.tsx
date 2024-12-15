"use client"

import { Stack } from "@mui/material"
import React, { useState } from "react"
import styled from "styled-components"

const Stepper:React.FC = () => {
    const [currentStep,setCurrentStep] = useState(1)
    const [steps, setSteps] = useState([
        {
            id:1,
            html:<>step 1</>
        },
        {
            id:2,
            html:<>step 2</>
        }
    ])
    const [progress,setProgress] = useState("0%")
    

    const nextStep = () => {
        const processStatus = 100 / steps.length
        if(currentStep === steps.length) {
            return
        }
        steps.forEach((step) => {
            if(step.id === currentStep) {
                setCurrentStep(currentStep + 1)
            }
        })
    }

    const lastStep = () => {
        alert("hi")
        
    }

    

    return (
        <Wrapper>
            <ProgresBarWraper>
            <ProgresBar $progressStatus={progress} />
            </ProgresBarWraper>

            <Stack justifyContent={"space-around"} sx={{}} width={"100%"} flexDirection={"row"}>
            <Button onClick={ () => {
                lastStep()
            }}>
                Go Back
            </Button>

            <Button onClick={() => {
                nextStep()
            }}>
                Go Next
            </Button>
            </Stack>
          
            <MainContent>
            {
              steps.map((step,current) => {
                return (<div key={step.id}>
                    
                    {currentStep === step.id && step.html}
                    
                </div>)
              })
            }
            
            </MainContent>



        </Wrapper>
    )
}

const MainContent = styled.div`
width: 80%;
background-color: #52617250;
height: 80%;
border-radius: 15px;
margin: 0 auto;
display: flex;
justify-content: center;
margin-bottom:20px;


`

const Button = styled.button`
    background-color: aliceblue;
    padding: .2rem;
    border-radius: 2px;
    cursor: pointer;
    margin: 20px 0px 20px 0px;



`


const ProgresBar = styled.div<{$progressStatus?:string}> `
    background-color: #70462b;
    height: 100%;
    width: ${props => props.$progressStatus || '0%'};
    transition: width 2s ease;
`   

const ProgresBarWraper = styled.div`
    top: 0;
    background-color: #67abf950;
    height: 6%;
    width: 100%;
    overflow: hidden;
    position: sticky;
`



const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 20rem;
    background-color: #C4E0F9;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`

export default Stepper