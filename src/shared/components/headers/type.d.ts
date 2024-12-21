/*
 * Copyright (c) 2024, Waseet LLC. All rights reserved.
 * For license. See license.txt
 */

interface HeaderInferface {
    title?: string;
    cancelpress?: () => void;
    useHeaderOne?: boolean;
    hasCancelBtn?: boolean;
    hasBackBtn?: boolean; }

interface LandingHeaderInferface {
    headerLeftComponent?: React.ReactNode;
    headerRightComponent?: React.ReactNode;
    title: string, hasBackBtn: boolean, cancelpress?: () => void;
}