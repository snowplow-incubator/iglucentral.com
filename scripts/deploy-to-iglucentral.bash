#!/bin/bash
set -e

# Similar to Perl die
function die() {
    echo "$@" 1>&2 ; exit 1;
}

s3_bucket=iglucentral.com
s3_region=us-east-1

[ -z "${AWS_ACCESS_KEY_ID}" ] && die "Need to set AWS_ACCESS_KEY_ID"
[ -z "${AWS_SECRET_ACCESS_KEY}" ] && die "Need to set AWS_SECRET_ACCESS_KEY"

#grab latest build
mkdir release
wget -O release/iglu-central.zip "https://github.com/snowplow-incubator/iglucentral.com/releases/latest/download/release.zip"

#unzip it
cd release
unzip iglu-central.zip
rm iglu-central.zip
cd ..

# upload to s3
aws s3 sync --region=${s3_region} ./release/build s3://${s3_bucket}/
rm -rf release