#!/usr/bin/env python3
"""
defines a helper function for pagination.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculates the range of indexes for pagination.

    Args:
        page (int): The page number.
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index and the end index.
    """
    startpage_index = (page - 1) * page_size
    endpage_index = page * page_size
    return (startpage_index, endpage_index)
