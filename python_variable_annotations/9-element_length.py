#!/usr/bin/env python3
"""
type-annotated function element_length.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples with elements and their lengths.

    Args:
        lst (Iterable[Sequence]): An iterable of sequences.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples where each tuple contains a sequence and its length.
    """
    return [(i, len(i)) for i in lst]
