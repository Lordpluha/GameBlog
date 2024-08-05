import { type FC } from 'react'
import { Search } from 'lucide-react'
import styles from './SearchModal.module.scss'
import Tags from '@entities/Tag/ui/Tags'
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalProps,
  ModalContentProps,
  ModalBodyProps,
  Input
} from '@nextui-org/react'

const tags = [
  { name: 'Игры' },
  { name: 'Пользователи' },
  { name: 'Новости' },
  { name: 'Блоги' },
  { name: 'Статьи' },
  { name: 'Видео' },
  { name: 'Читы' },
  { name: 'Комментарии' },
  { name: 'Помощь' }
]

export type TSearchModalProps = {
  contentProps: ModalContentProps
  bodyProps: ModalBodyProps
} & Omit<ModalProps, 'children'>

const SearchModal: FC<TSearchModalProps> = ({
  contentProps,
  bodyProps,
  ...props
}) => (
  <Modal
    backdrop='opaque'
    hideCloseButton={true}
    placement='top'
    size='xs'
    classNames={{
      backdrop:
        'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
      ...styles.searchModal
    }}
    {...props}
    // className={styles.searchModal}
  >
    <ModalContent>
      {onClose => (
        <ModalBody>
          <Input
            type='text'
            placeholder='ПОИСК'
            startContent={
              <Search />
              // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Tags
            tags={tags}
            className={styles.searchFormTags}
          />
        </ModalBody>
      )}
    </ModalContent>
  </Modal>
)

export default SearchModal
