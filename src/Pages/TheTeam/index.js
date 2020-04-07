import React from 'react'


import TheTeamBanner from './TheTeamBanner';
import TeamLeads from './TeamLeads';
import GetStarted from '../../components/GetStarted/GetStarted';
export default function index() {
    return ( 
        <div>
           <TheTeamBanner />
           <TeamLeads />
           <GetStarted />
        </div>
    )
}
