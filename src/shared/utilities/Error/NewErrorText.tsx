/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

import { Text } from "@shared/Typography";


const NewErrorText: React.FC<{ error: boolean | string | null }> = ({ error }) =>
  error ? (
    <Text variant={'regular12'} color={'danger'}>
      {error}
    </Text>
  ) : null;

export default NewErrorText;