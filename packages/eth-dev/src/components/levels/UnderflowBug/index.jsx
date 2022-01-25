import React, { useState, useEffect } from 'react'
import { Terminal } from '../../gameItems/components'
import { connectController as wrapGlobalGameData } from '../../gameItems'

import { ContractWindow, ExplanationWindow } from './components'
import levelDialog from './dialog'

export const LEVEL_ID = 'UnderflowBug'

const UnderflowBug = ({ dialog, globalGameActions }) => {
  useEffect(() => {
    // set initial level background
    globalGameActions.background.setCurrentBackground({ background: 'CityOutskirts' })
    // set dialog
    globalGameActions.dialog.initDialog({
      initialDialogPathId: `${LEVEL_ID}/Start`,
      currentDialog: levelDialog
    })
  }, [])

  const [contractWindowIsVisible, setContractWindowVisibility] = useState(false)
  const [explanationWindowIsVisible, setExplanationWindowVisibility] = useState(false)

  return (
    <div id='underflowBug'>
      <Terminal
        isOpen
        globalGameActions={globalGameActions}
        setContractWindowVisibility={setContractWindowVisibility}
        setExplanationWindowVisibility={setExplanationWindowVisibility}
      />

      <ContractWindow isOpen={contractWindowIsVisible} />
      <ExplanationWindow isOpen={explanationWindowIsVisible} />
    </div>
  )
}

export default wrapGlobalGameData(UnderflowBug)
