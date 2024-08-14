#!/usr/bin/env python3
"""
type-annotated function sum_mixed_list.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sums a list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers and floats.

    Returns:
        float: The sum of the list as a float.
    """
    return sum(mxd_lst)
