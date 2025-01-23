/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
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