import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import type { VFC } from 'react';

type Props = {
  id: string;
  minWidth?: number;
  label: string;
  value: string;
  items: {
    name: string;
    value: string | number | readonly string[];
  }[];
  onChange: (v: string) => void;
};

export const SingleSelect: VFC<Props> = ({
  id,
  minWidth = 100,
  label,
  value,
  items,
  onChange,
}) => {
  const labelId = `${id}-label`;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        autoWidth
        value={value}
        label={label}
        onChange={handleChange}
      >
        {items.map((v) => (
          <MenuItem key={`${id}-${v.value.toString()}`} value={v.value}>
            {v.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
