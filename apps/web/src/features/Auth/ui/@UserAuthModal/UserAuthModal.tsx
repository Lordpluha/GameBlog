import React, { FC } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps
} from '@nextui-org/react'

const UserAuthModal: FC<Omit<ModalProps, 'children'>> = props => {
  return (
    <Modal
      {...props}
      backdrop='opaque'
      shouldBlockScroll={true}
      hideCloseButton={true}
    >
      <ModalContent>
        <ModalHeader>UserAuthModal</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UserAuthModal
