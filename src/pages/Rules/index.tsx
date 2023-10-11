import React from 'react';

import { Typography, List, ListItem } from '@mui/material';

const Rules: React.FC = () => {
  return (
    <>
      <Typography component="h2" fontSize={24} sx={{ marginBottom: 0.5 }}>
        Правила сайта
      </Typography>
      <Typography component="h3" fontSize={20} sx={{ marginBottom: 1.5 }}>
        Правила добавления комментариев
      </Typography>
      <Typography>
        При добавлении своих комментариев пользователям сайта запрещается:
      </Typography>
      <List sx={{ listStyle: 'disc', paddingLeft: '3rem' }}>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          публиковать заведомо ложную информацию
        </ListItem>

        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          использовать ненормативную лексику(в том числе различные варианты с
          символами/производные матерных слов)
        </ListItem>

        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          публиковать информацию, нарушающую законы Российской Федерации
        </ListItem>

        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          отправлять сообщения, являющиеся рекламными
        </ListItem>
      </List>

      <Typography>
        Администрация оставляет за собой право удалять или изменять комментарии,
        нарушающие данные правила, без предварительного уведомления.
      </Typography>
    </>
  );
};

export default Rules;
