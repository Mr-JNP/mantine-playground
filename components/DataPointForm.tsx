import { Box, TextInput, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

import DataPointFormValues from "../types/DataPointFormValues";

type Props = {
  handleFormSubmit: (values: DataPointFormValues) => void;
};

const DataPointForm = ({ handleFormSubmit }: Props) => {
  const form = useForm({
    initialValues: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        required
        label='A'
        placeholder='0'
        {...form.getInputProps("a")}
      />
      <TextInput
        required
        label='B'
        placeholder='0'
        {...form.getInputProps("b")}
      />
      <TextInput
        required
        label='C'
        placeholder='0'
        {...form.getInputProps("c")}
      />
      <TextInput
        required
        label='D'
        placeholder='0'
        {...form.getInputProps("d")}
      />
      <TextInput
        required
        label='E'
        placeholder='0'
        {...form.getInputProps("e")}
      />
      <TextInput
        required
        label='F'
        placeholder='0'
        {...form.getInputProps("f")}
      />
      <Group position='center' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;
