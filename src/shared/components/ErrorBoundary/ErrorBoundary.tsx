/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */

import React, { ErrorInfo,ReactNode } from 'react';
import { ScrollView, Text } from 'react-native';

import FallBack from './Fallback';
import { boundaryStyles as styles } from './styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
  info: string;
}
/**
 * ErrorBoundary component to catch errors in its children and display a Fallback Screen.
 * i will get the information about which part in our component tree threw the error by using
 * the `getDerivedStateFromError` method and `componentDidCatch` lifecycle method.
 * This information can be forwarded to a logging service
 *
 * We use the component to wrap our entire application.
 * @example
 * ```tsx
 * const App = () => (
 *    <ErrorBoundary>
 *      <MyApp />
 *    </ErrorBoundary>
 * );
 * ```
 */

class ErrorBoundary extends React.Component<Props, State> {
  public  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      info: '',
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      hasError: true,
      errorMessage: error.message,
      info: info.componentStack || '',
    });
  }

  public render() : ReactNode {
    if (this.state.hasError) {
      if (__DEV__) {
        return (
          <ScrollView contentContainerStyle={styles.container}>
            <Text>{this.state.errorMessage}</Text>
            <Text>{this.state.info}</Text>
          </ScrollView>
        );
      }
      return <FallBack />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
