import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>

        <ItemText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Deliver</p>
        </ItemText>
        
    </Wrap>
  )
}

export default Section

const Wrap =styled.div`
      width:100vw;
      height:100vh;
      background-size:cover;
      background-position:center;
      background-position:center;
      background-image:url('/images/model-s.jpg');
`

const ItemText = styled.div`
      padding-top:15vh;
      text-aligh:center;
`