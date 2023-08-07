import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

function RelatedQuestion() {
  return (
    <section className="bg-white pt-2 pl-2">
      <div className="flex gap-2 text-blue-500">
        <FileCopyRoundedIcon />
        <h3 className="text-lg">Related</h3>
      </div>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText>
            Lorem fewaf ewa fewa fewa fewa fewa fewa fewaf ewa fewaf ew{' '}
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText>
            Lorem fewaf ewa fewa fewa fewa fewa fewa fewaf ewa fewaf ew{' '}
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            Lorem fewaf ewa fewa fewa fewa fewa fewa fewaf ewa fewaf ew{' '}
          </ListItemText>
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText>
            Lorem fewaf ewa fewa fewa fewa fewa fewa fewaf ewa fewaf ew{' '}
          </ListItemText>
        </ListItem>
      </List>
    </section>
  );
}

export default RelatedQuestion;
