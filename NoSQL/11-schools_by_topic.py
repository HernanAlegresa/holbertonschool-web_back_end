#!/usr/bin/env python3
"""
Find schools by topic in a MongoDB collection
"""


def schools_by_topic(mongo_collection, topic):
    """
    Finds all schools that have a specific topic
    """
    return list(mongo_collection.find({ "topics": topic }))
